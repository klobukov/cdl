CDL

# dev

## front
1. yarn start

## back
1. docker compose up

# build
1. yarn build

2. должна появиться папка build, убедиться что в ней
* есть папка backend (просто скопировать ее из проекта в build),
  где в папке config в файле db.php указаны параметры для продакшена
* есть файл .htaccess с таким содержимым
  <IfModule mod_rewrite.c>
  RewriteEngine on
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !=/favicon.ico
  RewriteRule ^ index.html [L]
  </IfModule>

3. папку build заархивировать в zip, отправить на хостинг и распаковать с заменой
