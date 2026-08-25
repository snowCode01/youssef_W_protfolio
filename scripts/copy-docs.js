import fs from 'fs';

try {
  fs.cpSync('dist', 'docs', { recursive: true });
  console.log('✓ Successfully copied dist to docs');
} catch (err) {
  console.error('Error copying dist to docs:', err);
  process.exit(1);
}
