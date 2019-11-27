# Тестовое задание для Stroy.Sale

Демо: [https://stroy.ptash.now.sh/](https://stroy.ptash.now.sh/)

Используйте любое имя и пароль для логина.  
Просмотр данных доступен только для авторизованных пользователей.  
Удалите данные в localStorage, чтобы выйти из авторизованного режима.  

Используемые технологии/библиотеки в соответствии с техническим заданием:

- TypeScript
- ReactJS
- Redux
- Redux Saga
- Styled-components
- [Material-UI](https://material-ui.com/)

Дополнительно были использованы следующие библиотеки:

- [react-responsive](https://github.com/contra/react-responsive)
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom#react-router-dom)
- [React Table v6](https://github.com/tannerlinsley/react-table/tree/v6#react-table-v6)

**Внимание:** В React Table v6 имеется баг ([Custom Cell components cause whole table to re-render #1118](https://github.com/tannerlinsley/react-table/issues/1118)), приводящий к перерисовке всех ячеек, где используются кастом Cell. В данном проекте это столбец с картинками материалов и столбец с кнопкой удаления и добавления строки таблицы.
