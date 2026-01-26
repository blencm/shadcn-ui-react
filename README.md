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

### Tailwind IntelliSense (VS Code)

To enable Tailwind CSS IntelliSense to detect classes within `cn(...)` and other utilities:

```bash
npx shadcn-ui-react init-vscode
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
      <Button loading className="ml-2">
        Loading
      </Button>
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
- `Dropzone`
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

---

### ✍️ UiInput

```tsx
import { UiInput } from "shadcn-ui-react";

export default function Example() {
  const [name, setName] = React.useState("");

  return (
    <UiInput
      htmlFormItemId="name"
      variant="outline"
      label="Name"
      placeholder="Enter name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      errorMessage={
        name.length > 0 && name.trim().length < 2
          ? "Min 2 characters"
          : undefined
      }
    />
  );
}
```

---

### 🧾 UiSelect

Using `items`:

```tsx
import { UiSelect } from "shadcn-ui-react";

export default function LanguageSelectItemsDemo() {
  const [lang, setLang] = React.useState("");

  return (
    <UiSelect
      htmlFormItemId="language"
      label="Language"
      placeholder="Select a language"
      value={lang}
      onChange={setLang}
      variant="outline"
      size="md"
      items={[
        { label: "Spanish", value: "es" },
        { label: "English", value: "en" },
        { label: "Portuguese", value: "pt" },
        { label: "Chinese", value: "zh" },
        { label: "Japanese", value: "ja" },
        { label: "Korean (disabled)", value: "ko", disabled: true },
      ]}
      errorMessage={!lang ? "Please select a language." : undefined}
    />
  );
}
```

Using `children`:

```tsx
import {
  UiSelect,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "shadcn-ui-react";

export default function LanguageSelectChildrenDemo() {
  const [lang, setLang] = React.useState("");

  return (
    <UiSelect
      htmlFormItemId="language_children"
      label="Language (grouped)"
      placeholder="Select a language"
      value={lang}
      onChange={setLang}
      variant="outline"
      size="md"
      errorMessage={!lang ? "Please select a language." : undefined}
    >
      <SelectGroup>
        <SelectLabel>Common</SelectLabel>
        <SelectItem value="es">Spanish</SelectItem>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="pt">Portuguese</SelectItem>

        <SelectSeparator />

        <SelectLabel>Asia</SelectLabel>
        <SelectItem value="zh">Chinese</SelectItem>
        <SelectItem value="ja">Japanese</SelectItem>
        <SelectItem value="ko" disabled>
          Korean (disabled)
        </SelectItem>
      </SelectGroup>
    </UiSelect>
  );
}
```

---

### 🪄 Accordion

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Click me</AccordionTrigger>
    <AccordionContent>Hidden content revealed!</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### ⚠️ Alert

```tsx
<Alert>This is an alert message</Alert>
```

---

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
  email: z.email({
    pattern: z.regexes.email,
    error: "Email is required",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  gender: z.enum(["male", "female"]).optional().nullable(),
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
        variant="outline" // outline | soft | ghost | filled | flushed | unstyled | link
        className="" // your style
      />

      <FormField
        control={form.control}
        name="password"
        type="password"
        placeholder="Enter password"
        label="Password"
        variant="outline" // outline | soft | ghost | filled | flushed | unstyled | link
        className="" // your style
      />

      <FormSelect
        control={form.control}
        name="gender"
        label="Gender"
        variant="outline" // outline | soft | ghost | filled | flushed | unstyled | link
        className="" // your style
        items={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
      />

      <Button className="ml-auto w-full" type="submit">
        Log In
      </Button>
    </Form>
  );
}
```

---

### 📊 DataTable

```tsx
import React, { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "shadcn-ui-react";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
};

const columns: ColumnDef<User, any>[] = [
  { accessorKey: "id", header: "ID" },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary" />
        <span className="font-medium">{row.original.name}</span>
      </div>
    ),
  },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">
        {row.original.role}
      </span>
    ),
  },
];

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  { id: 3, name: "Sam Johnson", email: "sam@example.com", role: "Viewer" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor" },
  { id: 5, name: "Bob White", email: "bob@example.com", role: "Viewer" },
  { id: 6, name: "Charlie Black", email: "charlie@example.com", role: "Admin" },
  { id: 7, name: "Diana Green", email: "diana@example.com", role: "Viewer" },
  { id: 8, name: "Eve Blue", email: "eve@example.com", role: "Editor" },
  { id: 9, name: "Frank Yellow", email: "frank@example.com", role: "Viewer" },
  { id: 10, name: "Grace Red", email: "grace@example.com", role: "Admin" },
];

const Example = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const pageCount = useMemo(() => Math.ceil(data.length / perPage), [perPage]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * perPage;
    const end = page * perPage;
    return data.slice(start, end);
  }, [page, perPage]);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h1 className="text-xl font-bold">DataTable v2</h1>
        <p className="text-sm text-muted-foreground">
          Manual pagination + templates + sticky header + accent
        </p>
      </div>

      <DataTable
        columns={columns}
        data={paginatedData}
        pageCount={pageCount}
        page={page}
        perPage={perPage}
        onPageChange={setPage}
        onPageSizeChange={(size) => {
          setPerPage(size);
          setPage(1);
        }}
        totalRows={data.length}
        isRowsSelected={false}
        rowPerPageLabel="Rows per page"
        pageLabel="Page"
        ofLabel="of"
        rowsSelectedLabel="rows selected"
        emptyData={<div className="py-10 text-center">No data available</div>}

        // ✨ NEW (v0.6.6)
        template="neo"          // neo | glass | compact | minimal | clean | elevated | grid | cards
        accent="primary"        // primary | emerald | indigo | rose | amber | zinc
        stickyHeader={true}
        headerScroll={false}
        animate={true}
        heightClassName="h-[420px]" // Important: Define the height for the ScrollArea to work.

        onClick={(row) => {
          // demo: click in row
          console.log("Row clicked:", row);
        }}

        // optional
        classNames={{
          // root: "border-primary/20",
          // th: "text-[10px]",
          // td: "py-2",
        }}
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

## ❤️ Support / Donations

If this project helps you, you can support it:

- GitHub Sponsors: https://github.com/sponsors/blencm
- Buy Me a Coffee: https://www.buymeacoffee.com/blencm

## Authors

- [@blencm](https://www.github.com/blencm)

## 📝 License

Licensed under the [MIT license](https://github.com/blencm/shadcn-ui-react/blob/main/LICENSE).
