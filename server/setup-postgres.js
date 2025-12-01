#!/usr/bin/env node

/**
 * PostgreSQL Setup Helper
 * 
 * This script helps you set up PostgreSQL for your backend.
 * Run: node setup-postgres.js
 */

import readline from 'readline';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

console.log('\n🚀 PostgreSQL Setup Helper\n');
console.log('This will help you configure your database connection.\n');

async function setup() {
  console.log('Choose your PostgreSQL provider:\n');
  console.log('1. Supabase (Recommended - Free tier)');
  console.log('2. Railway (Free tier)');
  console.log('3. Neon (Free tier)');
  console.log('4. Local PostgreSQL');
  console.log('5. Custom connection string\n');

  const choice = await question('Enter your choice (1-5): ');

  let connectionString = '';

  switch (choice.trim()) {
    case '1':
      console.log('\n📝 Supabase Setup:');
      console.log('1. Go to https://supabase.com');
      console.log('2. Create a new project');
      console.log('3. Go to Settings → Database');
      console.log('4. Copy the "URI" connection string\n');
      connectionString = await question('Paste your Supabase connection string: ');
      break;

    case '2':
      console.log('\n📝 Railway Setup:');
      console.log('1. Go to https://railway.app');
      console.log('2. Create new project → Provision PostgreSQL');
      console.log('3. Click on PostgreSQL → Connect tab');
      console.log('4. Copy "Postgres Connection URL"\n');
      connectionString = await question('Paste your Railway connection string: ');
      break;

    case '3':
      console.log('\n📝 Neon Setup:');
      console.log('1. Go to https://neon.tech');
      console.log('2. Create a new project');
      console.log('3. Copy the connection string\n');
      connectionString = await question('Paste your Neon connection string: ');
      break;

    case '4':
      console.log('\n📝 Local PostgreSQL Setup:');
      const host = await question('Host (default: localhost): ') || 'localhost';
      const port = await question('Port (default: 5432): ') || '5432';
      const database = await question('Database name (default: intelligent_systems): ') || 'intelligent_systems';
      const username = await question('Username (default: postgres): ') || 'postgres';
      const password = await question('Password: ');
      connectionString = `postgres://${username}:${password}@${host}:${port}/${database}`;
      break;

    case '5':
      connectionString = await question('Enter your connection string: ');
      break;

    default:
      console.log('❌ Invalid choice');
      rl.close();
      return;
  }

  // Validate connection string
  if (!connectionString.startsWith('postgres://') && !connectionString.startsWith('postgresql://')) {
    console.log('\n❌ Invalid connection string format');
    console.log('It should start with postgres:// or postgresql://');
    rl.close();
    return;
  }

  // Update .env file
  const envPath = join(__dirname, '.env');
  let envContent = '';

  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
    
    // Replace or add DATABASE_URL
    if (envContent.includes('DATABASE_URL=')) {
      envContent = envContent.replace(/DATABASE_URL=.*/g, `DATABASE_URL=${connectionString}`);
    } else {
      envContent += `\nDATABASE_URL=${connectionString}\n`;
    }

    // Remove old MONGODB_URI if exists
    if (envContent.includes('MONGODB_URI=')) {
      envContent = envContent.replace(/MONGODB_URI=.*/g, '# MONGODB_URI removed - now using PostgreSQL');
    }
  } else {
    console.log('\n⚠️  .env file not found. Creating new one...');
    envContent = `# Database Configuration\nDATABASE_URL=${connectionString}\n`;
  }

  // Write to .env
  fs.writeFileSync(envPath, envContent);

  console.log('\n✅ Configuration saved to .env file!');
  console.log('\n📋 Next steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm run dev');
  console.log('3. Check for "✅ PostgreSQL Connected successfully"');
  console.log('\n🎉 Setup complete!\n');

  rl.close();
}

setup().catch(error => {
  console.error('❌ Error:', error.message);
  rl.close();
});
