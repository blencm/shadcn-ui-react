# 🧩 shadcn-ui-react

A simple wrapper for [shadcn/ui](https://github.com/shadcn-ui/ui) to build modern, accessible, and customizable UIs in React with minimal setup.

---

## 📦 Installation

Install via your preferred package manager:

```bash
npm install shadcn-ui-react
# or
yarn add shadcn-ui-react
# or
pnpm add shadcn-ui-react
```

---

## 🚀 Getting Started

### 1. Import Global Styles

In your `main.tsx` or `App.tsx`:

```tsx
import "shadcn-ui-react/dist/style.css";
```

### 2. Use Components

```tsx
import { Button } from "shadcn-ui-react";

export default function App() {
  return (
    <div className="p-4">
      <Button variant="default">Click me</Button>
      <Button loading className="ml-2">Loading</Button>
    </div>
  );
}
```

---

## 🧱 Available Components

### 📦 UI Primitives

- `Accordion`
- `Alert`
- `Avatar`
- `Badge`
- `Breadcrumb`
- `Button`
- `Calendar`
- `Card`
- `Carousel`
- `Checkbox`
- `Collapsible`
- `Command`
- `ContextMenu`
- `Dialog`
- `Drawer`
- `DropdownMenu`
- `HoverCard`
- `Input`
- `InputOtp`
- `Label`
- `Menubar`
- `Modal`
- `NavigationMenu`
- `Pagination`
- `Popover`
- `Progress`
- `RadioGroup`
- `Resizable`
- `ScrollArea`
- `Select`
- `Separator`
- `Sheet`
- `Skeleton`
- `Slider`
- `Sonner`
- `Switch`
- `Table`
- `Tabs`
- `Textarea`
- `Toast`
- `Toggle`
- `ToggleGroup`
- `Tooltip`

---

### 🧠 Forms

- `Form`
- `FormField`

---

### 🔍 Inputs

- `SearchInput`

---

### 🧩 Utilities

- `UseToast`
- `Icons`

---

### 🛠 Shared Components

- `AlertModal`
- `Breadcrumbs`
- `DataTable` (with pagination)
- `DataTableSkeleton`
- `FileUpload`
- `Heading`
- `PageHead`
- `PaginationSection`

---

## ✨ Examples

### 🔘 Button

```tsx
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button loading>Loading...</Button>
```

### 🪄 Accordion

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Click me</AccordionTrigger>
    <AccordionContent>Hidden content revealed!</AccordionContent>
  </AccordionItem>
</Accordion>
```

### ⚠️ Alert

```tsx
<Alert>This is an alert message</Alert>
```

### 🧾 Form

```tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "shadcn-ui-react";
import * as z from "zod";

const formSchema = z.object({
  email: z.string({required_error: "Email is required"}).email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const defaultValues = {
    email: "demo@domain.com",
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {};

  return (
    <Form methods={form} onSubmit={onSubmit}>
      <FormField
        control={form.control}
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />
      <Button className="ml-auto w-full" type="submit">
        Log In
      </Button>
    </Form>
  );
}
```

### 📊 DataTable

```tsx
import React, { useState } from "react";
import { DataTable } from "shadcn-ui-react";
import { ColumnDef } from "@tanstack/react-table";

type User = {
  id: number;
  name: string;
  email: string;
};

const columns: ColumnDef<User, any>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Sam Johnson", email: "sam@example.com" },
  { id: 4, name: "Alice Brown", email: "alice@example.com" },
  { id: 5, name: "Bob White", email: "bob@example.com" },
  { id: 6, name: "Charlie Black", email: "charlie@example.com" },
  { id: 7, name: "Diana Green", email: "diana@example.com" },
  { id: 8, name: "Eve Blue", email: "eve@example.com" },
  { id: 9, name: "Frank Yellow", email: "frank@example.com" },
  { id: 10, name: "Grace Red", email: "grace@example.com" },
];

const Example = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const paginatedData = data.slice((page - 1) * perPage, page * perPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPerPage(newPageSize);
    setPage(1); // Reset to the first page when page size changes
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Data Table with Pagination</h1>
      <DataTable
        columns={columns}
        data={paginatedData}
        pageCount={Math.ceil(data.length / perPage)}
        page={page}
        perPage={perPage}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        rowPerPageLabel="Rows per page"
        pageLabel="Page"
        ofLabel="of"
        rowsSelectedLabel="rows selected"
        emptyData={<div>No data available</div>}
      />
    </div>
  );
};

export default Example;
```

---

## 💅 Theming & Styling

- Built with **Tailwind CSS**
- Override styles using your own CSS/Tailwind classes
- Component APIs are designed to be extensible

---

## 🧪 Example Projects

- Vite + React + Tailwind
- Next.js + TypeScript + shadcn-ui-react

---

## 📝 License

Licensed under the [MIT license](https://github.com/blencm/shadcn-ui-react/blob/main/LICENSE).
