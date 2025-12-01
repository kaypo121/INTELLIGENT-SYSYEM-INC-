import express from 'express';

const router = express.Router();

// Simple in-memory analytics (use database in production)
const analytics = {
  downloads: {},
  pageViews: {},
  buttonClicks: {}
};

// POST /api/analytics/track - Track events
router.post('/track', (req, res) => {
  try {
    const { event, data } = req.body;

    switch (event) {
      case 'download':
        const { filename } = data;
        analytics.downloads[filename] = (analytics.downloads[filename] || 0) + 1;
        break;
      
      case 'pageview':
        const { page } = data;
        analytics.pageViews[page] = (analytics.pageViews[page] || 0) + 1;
        break;
      
      case 'button_click':
        const { button } = data;
        analytics.buttonClicks[button] = (analytics.buttonClicks[button] || 0) + 1;
        break;
    }

    res.json({
      success: true,
      message: 'Event tracked successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to track event',
      error: error.message
    });
  }
});

// GET /api/analytics/stats - Get analytics stats (admin only)
router.get('/stats', (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        downloads: analytics.downloads,
        pageViews: analytics.pageViews,
        buttonClicks: analytics.buttonClicks,
        totalDownloads: Object.values(analytics.downloads).reduce((a, b) => a + b, 0),
        totalPageViews: Object.values(analytics.pageViews).reduce((a, b) => a + b, 0),
        totalClicks: Object.values(analytics.buttonClicks).reduce((a, b) => a + b, 0)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch analytics',
      error: error.message
    });
  }
});

export default router;
