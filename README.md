# Java-Script приложение с авторизацией
 [View demo](https://jezusdev.github.io/nativeJs/main.html)
-----------------------


## Структура

* Header
* Main 
   * Title
   * Cards

### Пользователи
Для имитации базы данных с пользователями был написан users.json с двумя пользователями
Чтобы протестировать функционал приложения, можете использовать логин: login1 и пароль: password1


### Функционал
Все кнопки реализованы через addEventListener

При ошибочном действии пользователя появляется сообщение с подсказкой, как исправиться)

Отправка формы происходит с помощью Fetch API, GET запрос

Внутри модального окна при попытке отправки логина и пароля производится валидация формы на количество символов в пароле, отсутствие запрещенных символов и существование пользователя с такими данными для входа


### Известные проблемы
* Сайт многостраничный, при авторизации и просмотре контактов будут подгружаться стили и скрипты, хотя это заметно только на крупных проектах
* Не отправляется форма через Iphone
* Код не сильно предназначен для серьезного расширения, надо дорабатывать
* Форма авторизации отправляется GET-запросом, что не безопасно

### Контакты
Email: jezusworking@gmail.com

Telegram: <https://t.me/Je_zus>


P.S. Надеюсь, мы неплохо сработаемся :)
