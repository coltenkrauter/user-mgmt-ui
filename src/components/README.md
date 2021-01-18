# Components

Every react componant should live in this directory. A componenet that consists of more than one file (such as styles or tests) will get its own directory and the main component file will be named `index.tsx` for ease of importing.

## Organization

For organizational purposes, we will classify our components into a few different categories. 

- basic
- forms
- widgets
- pages

## Definitions

### basic

Basic components will tend to be very simple and are almost always used as building blocks for other components. 

Examples could include: 
- Button
- Input
- Card
- SuperButton (basic components can be built out of other basic components)

Notice that there would be very little logic or functionality in any of these componenets.

### forms

Form components will tend to be... just forms. They can include limited logic, mostly used for input validation. They can be made up of basic components.

Examples could include: 
- RegistrationForm
- LoginForm
- IncidentMetricsForm

### widgets

Widget components will tend to be entire features that are built out of other components (basic/form/etc.) and can have their own logic. These components could be used as a page component or they could be nested in a page component and be access via a tab/modal/dialog or other means. Widgets shouldn't be nested into other widgets. 

Examples could include: 
- SlackWidget
- LoginWidget (This would utilze the LoginForm)
- CalculatorWidget
- InsightsWidget (This could be a widget which shows graphs and reporting data. It could be displayed in a tab or modal, or it could be an entire page.)
- ThemeWidget (This could be a very simple widget that just has a theme toggle button and the ability to change the app theme)

### pages

Page components are very similar to widget components. The biggest differences between pages and widgets are: 
- Pages generally won't be displayed in tabs/modals/dialogs
- Pages can have widgets nested in them

Examples could include: 
- LoginPage (This could utilze the LoginWidget)
- MainPage
- InsightsPage (This could utilze the InsightsWidget)

## Directory structure

You will notice that there are directories that correspond to the different component categories (pages, widgets...). Each component will be in its own directory and that directory will contain at minimum: `componont.tsx`, `componont.test.tsx` and `index.tsx`.

Finally, there is an app component which is an exception to the component categorizations. The app component is sort of the parent container of the entire app. It should contain ver simple code that imports other components. For example, the app component should basically just include something very similar to the following psudocode:

```typescript
<div>
  <Header /> // Header contains a toolbar which has navigation
  <Body /> // Body will automatically change based on routing and navigation
  <Footer />
</div>
```
