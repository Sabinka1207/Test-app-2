**This project created for Everlabs company as a  test task.**

Repository https://github.com/Sabinka1207/Test-app-2
Live page on Netlify https://sabinka1207-test-app-2.netlify.app

Main part is done. Additional tasks: 2 from 3 (#1 and #3).
Tech stack: React, Redux, Persist, RestAPI, Router, SASS, Git, gitBash, GitHub, Netlify.

**Тестове завдання. React**

Основна частина:
Потрібно створити сайт, в якому:
1. Home сторінка, роут “/”, має дві лінки: Photos та Todos, по кліку на які переводить на 
відповідний роут “/todos” та “/photos” та їх сторінки
2. Todos:
•можна додавати, видаляти
•туду можна перевести у стату “виконано”, при чому воно переноситься у кінець 
списку, чекбокс відмічений, а текст перекреслюється, наприклад: Buy some milk
•при перезавантаженні сторінки, список має лишатись не змінним (можна використати 
local storage)
•по кліку на туду, має відкриватися його сторінка з відповідним id у роуті, тобто: todos/
[todo_id]
3. Photos. Flow: 
1) юзер заходить на сторінку 
2) вводить в інпут айдішку альбому (число від 1 до 100)
3) клікає по кнопці Get photos, після чого з’являються фото відповідного албому.
•url для запиту “https://jsonplaceholder.typicode.com/photos?albumId=[albu   m   _id]”, де 
[album_id] це число, яке береться з інпуту.
•при завантаженні інших албомів, список фото перетирається
•після перезавантаження сторінки список фото пустий.
Було б плюсом:
1. Текст туду можна редагувати
2. Додати кнопки фільтрації туду відповідно: All, Todo, Done
3. Якщо в інпуті введений такий самий album_id, як і той що завантижений, то кнопка Get 
photos дізейблиться (не активна).
Реалізація:
•Технологія React та  використати state manger, наприклад Redux або Context. 
•Для стилів можна взяти Materil UI чи Bootstrap, або написати самому за дапомогою 
SCSS чи Styled Components. Головне щоб не дуже в очі кидалось :)
•js або ts на вибір
