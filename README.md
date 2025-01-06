Области хранения данных

-   база данных на json-server
-   BFF
-   редакс стор

Сущности приложения

-   пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
-   роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор (использование на клиенте)
-   статья: БД (список статей), стор (отображение в браузере)
-   комментаррий: БД (список комментариев), стор (отображение в браузере)

Таблицы БД:

-   пользователи - users: id / login / \_password /registred_at / role_id
-   роли - roles: id / name
-   статьи - posts: id / title / image_url / content / published_at
-   комментаррии - comments: id / author_id / post_id / content

Схема состояний на BFF

-   сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

-   user: id / login / roleId
-   posts: массив post: id / title / imageUrl / publishedAt / commentsCount
-   post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
-   users: массив user: id / login / registredAd / role
