$typescript_defs = "https://raw.githubusercontent.com/photonstorm/phaser3-docs/master/typescript/phaser.d.ts"

Remove-Item -Recurse -Force .git
Invoke-WebRequest -Uri $typescript_defs -OutFile phaser.d.ts
npm install
git init .
git add .
git commit -am "First commit"