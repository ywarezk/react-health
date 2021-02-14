# React and typescript

## Start a new project with typescript

```
> npx create-react-app ts-tutorial --template=typescript
```




## Lesson Plan

- start a react typescript project with `create-react-app`
- Basic types: `ReactElement`, `ReactNode`, `FC`
- Props and default value to props

## EX.

- Create a new react typescript project using `create-react-app`
- Create an interface for a `TodoItem` where each `TodoItem` has a `title`, `description` and `id`
- Create a `<TodoList items={[todoItem1, todoItem2]} />` component
- the `TodoList` component will get as a prop the list of items to displa
- make sure you use `typescript` to define the props the component is getting
- the component also has a default value of an empty array.