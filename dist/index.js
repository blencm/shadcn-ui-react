var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Accordion/accordion.tsx
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Item,
    __spreadValues({
      ref,
      className: cn("border-b", className)
    }, props)
  );
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronDownIcon, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
      ]
    })
  ) });
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }, props), {
      children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
    })
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/alert.tsx
import { cva } from "class-variance-authority";
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React2.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsx2(
    "div",
    __spreadValues({
      ref,
      role: "alert",
      className: cn(alertVariants({ variant }), className)
    }, props)
  );
});
Alert.displayName = "Alert";
var AlertTitle = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx2(
    "h5",
    __spreadValues({
      ref,
      className: cn("mb-1 font-medium leading-none tracking-tight", className)
    }, props)
  );
});
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx2(
    "div",
    __spreadValues({
      ref,
      className: cn("text-sm [&_p]:leading-relaxed", className)
    }, props)
  );
});
AlertDescription.displayName = "AlertDescription";

// src/components/aspect-ratio.tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
var AspectRatio = AspectRatioPrimitive.Root;

// src/components/avatar.tsx
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React3 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Avatar = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3(
    AvatarPrimitive.Root,
    __spreadValues({
      ref,
      className: cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )
    }, props)
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3(
    AvatarPrimitive.Image,
    __spreadValues({
      ref,
      className: cn("aspect-square h-full w-full", className)
    }, props)
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3(
    AvatarPrimitive.Fallback,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )
    }, props)
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/components/badge.tsx
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var badgeVariants = cva2(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge(_a) {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsx4("div", __spreadValues({ className: cn(badgeVariants({ variant }), className) }, props));
}

// src/components/breadcrumb.tsx
import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import * as React4 from "react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var Breadcrumb = React4.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx5("nav", __spreadValues({ ref, "aria-label": "breadcrumb" }, props));
});
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React4.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx5(
    "ol",
    __spreadValues({
      ref,
      className: cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      )
    }, props)
  );
});
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React4.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx5(
    "li",
    __spreadValues({
      ref,
      className: cn("inline-flex items-center gap-1.5", className)
    }, props)
  );
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React4.forwardRef((_a, ref) => {
  var _b = _a, { asChild, className } = _b, props = __objRest(_b, ["asChild", "className"]);
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx5(
    Comp,
    __spreadValues({
      ref,
      className: cn("transition-colors hover:text-foreground", className)
    }, props)
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React4.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx5(
    "span",
    __spreadValues({
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-foreground", className)
    }, props)
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = (_a) => {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx5(
    "li",
    __spreadProps(__spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className)
    }, props), {
      children: children != null ? children : /* @__PURE__ */ jsx5(ChevronRightIcon, {})
    })
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs2(
    "span",
    __spreadProps(__spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx5(DotsHorizontalIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx5("span", { className: "sr-only", children: "More" })
      ]
    })
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

// src/components/Button/button.tsx
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
import * as React5 from "react";
import { Loader2 } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var buttonVariants = cva3(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      loaderClassName,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "asChild",
      "loading",
      "loaderClassName",
      "children"
    ]);
    const Comp = asChild ? Slot2 : "button";
    return /* @__PURE__ */ jsxs3(
      Comp,
      __spreadProps(__spreadValues({
        className: cn(
          buttonVariants({ variant, size }),
          className,
          loading && "relative"
        ),
        ref,
        disabled: loading || props.disabled
      }, props), {
        children: [
          loading ? /* @__PURE__ */ jsx6(Loader2, { className: cn(loaderClassName, "animate-spin mr-2") }) : null,
          children
        ]
      })
    );
  }
);
Button.displayName = "Button";

// node_modules/react-day-picker/dist/esm/DayPicker.js
import React32, { useCallback as useCallback2, useMemo, useRef as useRef2 } from "react";

// node_modules/react-day-picker/dist/esm/UI.js
var UI;
(function(UI2) {
  UI2["Root"] = "root";
  UI2["Chevron"] = "chevron";
  UI2["Day"] = "day";
  UI2["DayButton"] = "day_button";
  UI2["CaptionLabel"] = "caption_label";
  UI2["Dropdowns"] = "dropdowns";
  UI2["Dropdown"] = "dropdown";
  UI2["DropdownRoot"] = "dropdown_root";
  UI2["Footer"] = "footer";
  UI2["MonthGrid"] = "month_grid";
  UI2["MonthCaption"] = "month_caption";
  UI2["MonthsDropdown"] = "months_dropdown";
  UI2["Month"] = "month";
  UI2["Months"] = "months";
  UI2["Nav"] = "nav";
  UI2["NextMonthButton"] = "button_next";
  UI2["PreviousMonthButton"] = "button_previous";
  UI2["Week"] = "week";
  UI2["Weeks"] = "weeks";
  UI2["Weekday"] = "weekday";
  UI2["Weekdays"] = "weekdays";
  UI2["WeekNumber"] = "week_number";
  UI2["WeekNumberHeader"] = "week_number_header";
  UI2["YearsDropdown"] = "years_dropdown";
})(UI || (UI = {}));
var DayFlag;
(function(DayFlag2) {
  DayFlag2["disabled"] = "disabled";
  DayFlag2["hidden"] = "hidden";
  DayFlag2["outside"] = "outside";
  DayFlag2["focused"] = "focused";
  DayFlag2["today"] = "today";
})(DayFlag || (DayFlag = {}));
var SelectionState;
(function(SelectionState2) {
  SelectionState2["range_end"] = "range_end";
  SelectionState2["range_middle"] = "range_middle";
  SelectionState2["range_start"] = "range_start";
  SelectionState2["selected"] = "selected";
})(SelectionState || (SelectionState = {}));
var Animation;
(function(Animation2) {
  Animation2["weeks_before_enter"] = "weeks_before_enter";
  Animation2["weeks_before_exit"] = "weeks_before_exit";
  Animation2["weeks_after_enter"] = "weeks_after_enter";
  Animation2["weeks_after_exit"] = "weeks_after_exit";
  Animation2["caption_after_enter"] = "caption_after_enter";
  Animation2["caption_after_exit"] = "caption_after_exit";
  Animation2["caption_before_enter"] = "caption_before_enter";
  Animation2["caption_before_exit"] = "caption_before_exit";
})(Animation || (Animation = {}));

// node_modules/@date-fns/tz/constants/index.js
var constructFromSymbol = Symbol.for("constructDateFrom");

// node_modules/@date-fns/tz/tzOffset/index.js
var offsetFormatCache = {};
var offsetCache = {};
function tzOffset(timeZone, date) {
  try {
    const format2 = offsetFormatCache[timeZone] || (offsetFormatCache[timeZone] = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "numeric",
      timeZoneName: "longOffset"
    }).format);
    const offsetStr = format2(date).split("GMT")[1] || "";
    if (offsetStr in offsetCache) return offsetCache[offsetStr];
    return calcOffset(offsetStr, offsetStr.split(":"));
  } catch (e) {
    if (timeZone in offsetCache) return offsetCache[timeZone];
    const captures = timeZone == null ? void 0 : timeZone.match(offsetRe);
    if (captures) return calcOffset(timeZone, captures.slice(1));
    return NaN;
  }
}
var offsetRe = /([+-]\d\d):?(\d\d)?/;
function calcOffset(cacheStr, values) {
  const hours = +values[0];
  const minutes = +(values[1] || 0);
  return offsetCache[cacheStr] = hours > 0 ? hours * 60 + minutes : hours * 60 - minutes;
}

// node_modules/@date-fns/tz/date/mini.js
var TZDateMini = class _TZDateMini extends Date {
  //#region static
  constructor(...args) {
    super();
    if (args.length > 1 && typeof args[args.length - 1] === "string") {
      this.timeZone = args.pop();
    }
    this.internal = /* @__PURE__ */ new Date();
    if (isNaN(tzOffset(this.timeZone, this))) {
      this.setTime(NaN);
    } else {
      if (!args.length) {
        this.setTime(Date.now());
      } else if (typeof args[0] === "number" && (args.length === 1 || args.length === 2 && typeof args[1] !== "number")) {
        this.setTime(args[0]);
      } else if (typeof args[0] === "string") {
        this.setTime(+new Date(args[0]));
      } else if (args[0] instanceof Date) {
        this.setTime(+args[0]);
      } else {
        this.setTime(+new Date(...args));
        adjustToSystemTZ(this, NaN);
        syncToInternal(this);
      }
    }
  }
  static tz(tz, ...args) {
    return args.length ? new _TZDateMini(...args, tz) : new _TZDateMini(Date.now(), tz);
  }
  //#endregion
  //#region time zone
  withTimeZone(timeZone) {
    return new _TZDateMini(+this, timeZone);
  }
  getTimezoneOffset() {
    return -tzOffset(this.timeZone, this);
  }
  //#endregion
  //#region time
  setTime(time) {
    Date.prototype.setTime.apply(this, arguments);
    syncToInternal(this);
    return +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](date) {
    return new _TZDateMini(+new Date(date), this.timeZone);
  }
  //#endregion
};
var re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
  if (!re.test(method)) return;
  const utcMethod = method.replace(re, "$1UTC");
  if (!TZDateMini.prototype[utcMethod]) return;
  if (method.startsWith("get")) {
    TZDateMini.prototype[method] = function() {
      return this.internal[utcMethod]();
    };
  } else {
    TZDateMini.prototype[method] = function() {
      Date.prototype[utcMethod].apply(this.internal, arguments);
      syncFromInternal(this);
      return +this;
    };
    TZDateMini.prototype[utcMethod] = function() {
      Date.prototype[utcMethod].apply(this, arguments);
      syncToInternal(this);
      return +this;
    };
  }
});
function syncToInternal(date) {
  date.internal.setTime(+date);
  date.internal.setUTCMinutes(date.internal.getUTCMinutes() - date.getTimezoneOffset());
}
function syncFromInternal(date) {
  Date.prototype.setFullYear.call(date, date.internal.getUTCFullYear(), date.internal.getUTCMonth(), date.internal.getUTCDate());
  Date.prototype.setHours.call(date, date.internal.getUTCHours(), date.internal.getUTCMinutes(), date.internal.getUTCSeconds(), date.internal.getUTCMilliseconds());
  adjustToSystemTZ(date);
}
function adjustToSystemTZ(date) {
  const offset = tzOffset(date.timeZone, date);
  const prevHour = /* @__PURE__ */ new Date(+date);
  prevHour.setUTCHours(prevHour.getUTCHours() - 1);
  const systemOffset = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset();
  const prevHourSystemOffset = -(/* @__PURE__ */ new Date(+prevHour)).getTimezoneOffset();
  const systemDSTChange = systemOffset - prevHourSystemOffset;
  const dstShift = Date.prototype.getHours.apply(date) !== date.internal.getUTCHours();
  if (systemDSTChange && dstShift) date.internal.setUTCMinutes(date.internal.getUTCMinutes() + systemDSTChange);
  const offsetDiff = systemOffset - offset;
  if (offsetDiff) Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetDiff);
  const postOffset = tzOffset(date.timeZone, date);
  const postSystemOffset = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset();
  const postOffsetDiff = postSystemOffset - postOffset;
  const offsetChanged = postOffset !== offset;
  const postDiff = postOffsetDiff - offsetDiff;
  if (offsetChanged && postDiff) {
    Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + postDiff);
    const newOffset = tzOffset(date.timeZone, date);
    const offsetChange = postOffset - newOffset;
    if (offsetChange) {
      date.internal.setUTCMinutes(date.internal.getUTCMinutes() + offsetChange);
      Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetChange);
    }
  }
}

// node_modules/@date-fns/tz/date/index.js
var TZDate = class _TZDate extends TZDateMini {
  //#region static
  static tz(tz, ...args) {
    return args.length ? new _TZDate(...args, tz) : new _TZDate(Date.now(), tz);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [sign, hours, minutes] = this.tzComponents();
    const tz = `${sign}${hours}:${minutes}`;
    return this.internal.toISOString().slice(0, -1) + tz;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [day, date, month, year] = this.internal.toUTCString().split(" ");
    return `${day == null ? void 0 : day.slice(0, -1)} ${month} ${date} ${year}`;
  }
  toTimeString() {
    const time = this.internal.toUTCString().split(" ")[4];
    const [sign, hours, minutes] = this.tzComponents();
    return `${time} GMT${sign}${hours}${minutes} (${tzName(this.timeZone, this)})`;
  }
  toLocaleString(locales, options) {
    return Date.prototype.toLocaleString.call(this, locales, __spreadProps(__spreadValues({}, options), {
      timeZone: (options == null ? void 0 : options.timeZone) || this.timeZone
    }));
  }
  toLocaleDateString(locales, options) {
    return Date.prototype.toLocaleDateString.call(this, locales, __spreadProps(__spreadValues({}, options), {
      timeZone: (options == null ? void 0 : options.timeZone) || this.timeZone
    }));
  }
  toLocaleTimeString(locales, options) {
    return Date.prototype.toLocaleTimeString.call(this, locales, __spreadProps(__spreadValues({}, options), {
      timeZone: (options == null ? void 0 : options.timeZone) || this.timeZone
    }));
  }
  //#endregion
  //#region private
  tzComponents() {
    const offset = this.getTimezoneOffset();
    const sign = offset > 0 ? "-" : "+";
    const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
    const minutes = String(Math.abs(offset) % 60).padStart(2, "0");
    return [sign, hours, minutes];
  }
  //#endregion
  withTimeZone(timeZone) {
    return new _TZDate(+this, timeZone);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](date) {
    return new _TZDate(+new Date(date), this.timeZone);
  }
  //#endregion
};
function tzName(tz, date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    timeZoneName: "long"
  }).format(date).slice(12);
}

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol2 = Symbol.for("constructDateFrom");

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol2 in date)
    return date[constructFromSymbol2](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(amount)) return constructFrom((options == null ? void 0 : options.in) || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(amount)) return constructFrom((options == null ? void 0 : options.in) || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom((options == null ? void 0 : options.in) || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = (_h = (_g = (_d = (_c = options == null ? void 0 : options.weekStartsOn) != null ? _c : (_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) != null ? _d : defaultOptions2.weekStartsOn) != null ? _g : (_f = (_e = defaultOptions2.locale) == null ? void 0 : _e.options) == null ? void 0 : _f.weekStartsOn) != null ? _h : 0;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
  return startOfWeek(date, __spreadProps(__spreadValues({}, options), { weekStartsOn: 1 }));
}

// node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom((options == null ? void 0 : options.in) || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/date-fns/addWeeks.js
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}

// node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}

// node_modules/date-fns/max.js
function max(dates, options) {
  let result;
  let context = options == null ? void 0 : options.in;
  dates.forEach((date) => {
    if (!context && typeof date === "object")
      context = constructFrom.bind(null, date);
    const date_ = toDate(date, context);
    if (!result || result < date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom(context, result || NaN);
}

// node_modules/date-fns/min.js
function min(dates, options) {
  let result;
  let context = options == null ? void 0 : options.in;
  dates.forEach((date) => {
    if (!context && typeof date === "object")
      context = constructFrom.bind(null, date);
    const date_ = toDate(date, context);
    if (!result || result > date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom(context, result || NaN);
}

// node_modules/date-fns/isSameDay.js
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}

// node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}

// node_modules/date-fns/differenceInCalendarMonths.js
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// node_modules/date-fns/endOfMonth.js
function endOfMonth(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/_lib/normalizeInterval.js
function normalizeInterval(context, interval) {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return { start, end };
}

// node_modules/date-fns/eachMonthOfInterval.js
function eachMonthOfInterval(interval, options) {
  var _a;
  const { start, end } = normalizeInterval(options == null ? void 0 : options.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  let step = (_a = options == null ? void 0 : options.step) != null ? _a : 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date.setMonth(date.getMonth() + step);
  }
  return reversed ? dates.reverse() : dates;
}

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/endOfYear.js
function endOfYear(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  _date.setFullYear(year + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options == null ? void 0 : options.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// node_modules/date-fns/endOfWeek.js
function endOfWeek(date, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = (_h = (_g = (_d = (_c = options == null ? void 0 : options.weekStartsOn) != null ? _c : (_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) != null ? _d : defaultOptions2.weekStartsOn) != null ? _g : (_f = (_e = defaultOptions2.locale) == null ? void 0 : _e.options) == null ? void 0 : _f.weekStartsOn) != null ? _h : 0;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/endOfISOWeek.js
function endOfISOWeek(date, options) {
  return endOfWeek(date, __spreadProps(__spreadValues({}, options), { weekStartsOn: 1 }));
}

// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = (token, count2, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count2 === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count2.toString());
  }
  if (options == null ? void 0 : options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = (options == null ? void 0 : options.context) ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

// node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// node_modules/date-fns/locale/en-US.js
var enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = (_h = (_g = (_d = (_c = options == null ? void 0 : options.firstWeekContainsDate) != null ? _c : (_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) != null ? _d : defaultOptions2.firstWeekContainsDate) != null ? _g : (_f = (_e = defaultOptions2.locale) == null ? void 0 : _e.options) == null ? void 0 : _f.firstWeekContainsDate) != null ? _h : 1;
  const firstWeekOfNextYear = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = (_h = (_g = (_d = (_c = options == null ? void 0 : options.firstWeekContainsDate) != null ? _c : (_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) != null ? _d : defaultOptions2.firstWeekContainsDate) != null ? _g : (_f = (_e = defaultOptions2.locale) == null ? void 0 : _e.options) == null ? void 0 : _f.firstWeekContainsDate) != null ? _h : 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

// node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

// node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

// node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
var timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
var dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

// node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  const defaultOptions2 = getDefaultOptions();
  const locale = (_b = (_a = options == null ? void 0 : options.locale) != null ? _a : defaultOptions2.locale) != null ? _b : enUS;
  const firstWeekContainsDate = (_j = (_i = (_f = (_e = options == null ? void 0 : options.firstWeekContainsDate) != null ? _e : (_d = (_c = options == null ? void 0 : options.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) != null ? _f : defaultOptions2.firstWeekContainsDate) != null ? _i : (_h = (_g = defaultOptions2.locale) == null ? void 0 : _g.options) == null ? void 0 : _h.firstWeekContainsDate) != null ? _j : 1;
  const weekStartsOn = (_r = (_q = (_n = (_m = options == null ? void 0 : options.weekStartsOn) != null ? _m : (_l = (_k = options == null ? void 0 : options.locale) == null ? void 0 : _k.options) == null ? void 0 : _l.weekStartsOn) != null ? _n : defaultOptions2.weekStartsOn) != null ? _q : (_p = (_o = defaultOptions2.locale) == null ? void 0 : _o.options) == null ? void 0 : _p.weekStartsOn) != null ? _r : 0;
  const originalDate = toDate(date, options == null ? void 0 : options.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!(options == null ? void 0 : options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token) || !(options == null ? void 0 : options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns/getDaysInMonth.js
function getDaysInMonth(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(_date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

// node_modules/date-fns/getMonth.js
function getMonth(date, options) {
  return toDate(date, options == null ? void 0 : options.in).getMonth();
}

// node_modules/date-fns/getYear.js
function getYear(date, options) {
  return toDate(date, options == null ? void 0 : options.in).getFullYear();
}

// node_modules/date-fns/isAfter.js
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}

// node_modules/date-fns/isBefore.js
function isBefore(date, dateToCompare) {
  return +toDate(date) < +toDate(dateToCompare);
}

// node_modules/date-fns/isSameMonth.js
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}

// node_modules/date-fns/isSameYear.js
function isSameYear(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear();
}

// node_modules/date-fns/setMonth.js
function setMonth(date, month, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const midMonth = constructFrom((options == null ? void 0 : options.in) || date, 0);
  midMonth.setFullYear(year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(midMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}

// node_modules/date-fns/setYear.js
function setYear(date, year, options) {
  const date_ = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(+date_)) return constructFrom((options == null ? void 0 : options.in) || date, NaN);
  date_.setFullYear(year);
  return date_;
}

// node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
var FIVE_WEEKS = 5;
var FOUR_WEEKS = 4;
function getBroadcastWeeksInMonth(month, dateLib) {
  const firstDayOfMonth = dateLib.startOfMonth(month);
  const firstDayOfWeek = firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;
  const broadcastStartDate = dateLib.addDays(month, -firstDayOfWeek + 1);
  const lastDateOfLastWeek = dateLib.addDays(broadcastStartDate, FIVE_WEEKS * 7 - 1);
  const numberOfWeeks = dateLib.getMonth(month) === dateLib.getMonth(lastDateOfLastWeek) ? FIVE_WEEKS : FOUR_WEEKS;
  return numberOfWeeks;
}

// node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
function startOfBroadcastWeek(date, dateLib) {
  const firstOfMonth = dateLib.startOfMonth(date);
  const dayOfWeek = firstOfMonth.getDay();
  if (dayOfWeek === 1) {
    return firstOfMonth;
  } else if (dayOfWeek === 0) {
    return dateLib.addDays(firstOfMonth, -1 * 6);
  } else {
    return dateLib.addDays(firstOfMonth, -1 * (dayOfWeek - 1));
  }
}

// node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
function endOfBroadcastWeek(date, dateLib) {
  const startDate = startOfBroadcastWeek(date, dateLib);
  const numberOfWeeks = getBroadcastWeeksInMonth(date, dateLib);
  const endDate = dateLib.addDays(startDate, numberOfWeeks * 7 - 1);
  return endDate;
}

// node_modules/react-day-picker/dist/esm/classes/DateLib.js
var DateLib = class {
  /**
   * Creates an instance of DateLib.
   *
   * @param options The options for the date library.
   * @param overrides Overrides for the date library functions.
   */
  constructor(options, overrides) {
    this.Date = Date;
    this.today = () => {
      var _a;
      if ((_a = this.overrides) == null ? void 0 : _a.today) {
        return this.overrides.today();
      }
      if (this.options.timeZone) {
        return TZDate.tz(this.options.timeZone);
      }
      return new this.Date();
    };
    this.newDate = (year, monthIndex, date) => {
      var _a;
      if ((_a = this.overrides) == null ? void 0 : _a.newDate) {
        return this.overrides.newDate(year, monthIndex, date);
      }
      if (this.options.timeZone) {
        return new TZDate(year, monthIndex, date, this.options.timeZone);
      }
      return new Date(year, monthIndex, date);
    };
    this.addDays = (date, amount) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.addDays) ? this.overrides.addDays(date, amount) : addDays(date, amount);
    };
    this.addMonths = (date, amount) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.addMonths) ? this.overrides.addMonths(date, amount) : addMonths(date, amount);
    };
    this.addWeeks = (date, amount) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.addWeeks) ? this.overrides.addWeeks(date, amount) : addWeeks(date, amount);
    };
    this.addYears = (date, amount) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.addYears) ? this.overrides.addYears(date, amount) : addYears(date, amount);
    };
    this.differenceInCalendarDays = (dateLeft, dateRight) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.differenceInCalendarDays) ? this.overrides.differenceInCalendarDays(dateLeft, dateRight) : differenceInCalendarDays(dateLeft, dateRight);
    };
    this.differenceInCalendarMonths = (dateLeft, dateRight) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.differenceInCalendarMonths) ? this.overrides.differenceInCalendarMonths(dateLeft, dateRight) : differenceInCalendarMonths(dateLeft, dateRight);
    };
    this.eachMonthOfInterval = (interval) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.eachMonthOfInterval) ? this.overrides.eachMonthOfInterval(interval) : eachMonthOfInterval(interval);
    };
    this.endOfBroadcastWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.endOfBroadcastWeek) ? this.overrides.endOfBroadcastWeek(date, this) : endOfBroadcastWeek(date, this);
    };
    this.endOfISOWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.endOfISOWeek) ? this.overrides.endOfISOWeek(date) : endOfISOWeek(date);
    };
    this.endOfMonth = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.endOfMonth) ? this.overrides.endOfMonth(date) : endOfMonth(date);
    };
    this.endOfWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.endOfWeek) ? this.overrides.endOfWeek(date, this.options) : endOfWeek(date, this.options);
    };
    this.endOfYear = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.endOfYear) ? this.overrides.endOfYear(date) : endOfYear(date);
    };
    this.format = (date, formatStr) => {
      var _a;
      const formatted = ((_a = this.overrides) == null ? void 0 : _a.format) ? this.overrides.format(date, formatStr, this.options) : format(date, formatStr, this.options);
      if (this.options.numerals && this.options.numerals !== "latn") {
        return this.replaceDigits(formatted);
      }
      return formatted;
    };
    this.getISOWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.getISOWeek) ? this.overrides.getISOWeek(date) : getISOWeek(date);
    };
    this.getMonth = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.getMonth) ? this.overrides.getMonth(date, this.options) : getMonth(date, this.options);
    };
    this.getYear = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.getYear) ? this.overrides.getYear(date, this.options) : getYear(date, this.options);
    };
    this.getWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.getWeek) ? this.overrides.getWeek(date, this.options) : getWeek(date, this.options);
    };
    this.isAfter = (date, dateToCompare) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isAfter) ? this.overrides.isAfter(date, dateToCompare) : isAfter(date, dateToCompare);
    };
    this.isBefore = (date, dateToCompare) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isBefore) ? this.overrides.isBefore(date, dateToCompare) : isBefore(date, dateToCompare);
    };
    this.isDate = (value) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isDate) ? this.overrides.isDate(value) : isDate(value);
    };
    this.isSameDay = (dateLeft, dateRight) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isSameDay) ? this.overrides.isSameDay(dateLeft, dateRight) : isSameDay(dateLeft, dateRight);
    };
    this.isSameMonth = (dateLeft, dateRight) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isSameMonth) ? this.overrides.isSameMonth(dateLeft, dateRight) : isSameMonth(dateLeft, dateRight);
    };
    this.isSameYear = (dateLeft, dateRight) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isSameYear) ? this.overrides.isSameYear(dateLeft, dateRight) : isSameYear(dateLeft, dateRight);
    };
    this.max = (dates) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.max) ? this.overrides.max(dates) : max(dates);
    };
    this.min = (dates) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.min) ? this.overrides.min(dates) : min(dates);
    };
    this.setMonth = (date, month) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.setMonth) ? this.overrides.setMonth(date, month) : setMonth(date, month);
    };
    this.setYear = (date, year) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.setYear) ? this.overrides.setYear(date, year) : setYear(date, year);
    };
    this.startOfBroadcastWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfBroadcastWeek) ? this.overrides.startOfBroadcastWeek(date, this) : startOfBroadcastWeek(date, this);
    };
    this.startOfDay = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfDay) ? this.overrides.startOfDay(date) : startOfDay(date);
    };
    this.startOfISOWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfISOWeek) ? this.overrides.startOfISOWeek(date) : startOfISOWeek(date);
    };
    this.startOfMonth = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfMonth) ? this.overrides.startOfMonth(date) : startOfMonth(date);
    };
    this.startOfWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfWeek) ? this.overrides.startOfWeek(date, this.options) : startOfWeek(date, this.options);
    };
    this.startOfYear = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfYear) ? this.overrides.startOfYear(date) : startOfYear(date);
    };
    this.options = __spreadValues({ locale: enUS }, options);
    this.overrides = overrides;
  }
  /**
   * Generate digit map dynamically using Intl.NumberFormat.
   *
   * @since 9.5.0
   */
  getDigitMap() {
    const { numerals = "latn" } = this.options;
    const formatter = new Intl.NumberFormat("en-US", {
      numberingSystem: numerals
    });
    const digitMap = {};
    for (let i = 0; i < 10; i++) {
      digitMap[i.toString()] = formatter.format(i);
    }
    return digitMap;
  }
  /**
   * Replace Arabic digits with the target numbering system digits.
   *
   * @since 9.5.0
   */
  replaceDigits(input) {
    const digitMap = this.getDigitMap();
    return input.replace(/\d/g, (digit) => digitMap[digit] || digit);
  }
  /**
   * Format number using the custom numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number.
   */
  formatNumber(value) {
    return this.replaceDigits(value.toString());
  }
};
var defaultDateLib = new DateLib();

// node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
function getClassNamesForModifiers(modifiers, classNames, modifiersClassNames = {}) {
  const modifierClassNames = Object.entries(modifiers).filter(([, active]) => active === true).reduce((previousValue, [key]) => {
    if (modifiersClassNames[key]) {
      previousValue.push(modifiersClassNames[key]);
    } else if (classNames[DayFlag[key]]) {
      previousValue.push(classNames[DayFlag[key]]);
    } else if (classNames[SelectionState[key]]) {
      previousValue.push(classNames[SelectionState[key]]);
    }
    return previousValue;
  }, [classNames[UI.Day]]);
  return modifierClassNames;
}

// node_modules/react-day-picker/dist/esm/components/custom-components.js
var custom_components_exports = {};
__export(custom_components_exports, {
  Button: () => Button2,
  CaptionLabel: () => CaptionLabel,
  Chevron: () => Chevron,
  Day: () => Day,
  DayButton: () => DayButton,
  Dropdown: () => Dropdown,
  DropdownNav: () => DropdownNav,
  Footer: () => Footer,
  Month: () => Month,
  MonthCaption: () => MonthCaption,
  MonthGrid: () => MonthGrid,
  Months: () => Months,
  MonthsDropdown: () => MonthsDropdown,
  Nav: () => Nav,
  NextMonthButton: () => NextMonthButton,
  Option: () => Option,
  PreviousMonthButton: () => PreviousMonthButton,
  Root: () => Root4,
  Select: () => Select,
  Week: () => Week,
  WeekNumber: () => WeekNumber,
  WeekNumberHeader: () => WeekNumberHeader,
  Weekday: () => Weekday,
  Weekdays: () => Weekdays,
  Weeks: () => Weeks,
  YearsDropdown: () => YearsDropdown
});

// node_modules/react-day-picker/dist/esm/components/Button.js
import React6 from "react";
function Button2(props) {
  return React6.createElement("button", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
import React7 from "react";
function CaptionLabel(props) {
  return React7.createElement("span", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/Chevron.js
import React8 from "react";
function Chevron(props) {
  const { size = 24, orientation = "left", className } = props;
  return React8.createElement(
    "svg",
    { className, width: size, height: size, viewBox: "0 0 24 24" },
    orientation === "up" && React8.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
    orientation === "down" && React8.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
    orientation === "left" && React8.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
    orientation === "right" && React8.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
  );
}

// node_modules/react-day-picker/dist/esm/components/Day.js
import React9 from "react";
function Day(props) {
  const _a = props, { day, modifiers } = _a, tdProps = __objRest(_a, ["day", "modifiers"]);
  return React9.createElement("td", __spreadValues({}, tdProps));
}

// node_modules/react-day-picker/dist/esm/components/DayButton.js
import React10 from "react";
function DayButton(props) {
  const _a = props, { day, modifiers } = _a, buttonProps = __objRest(_a, ["day", "modifiers"]);
  const ref = React10.useRef(null);
  React10.useEffect(() => {
    var _a2;
    if (modifiers.focused)
      (_a2 = ref.current) == null ? void 0 : _a2.focus();
  }, [modifiers.focused]);
  return React10.createElement("button", __spreadValues({ ref }, buttonProps));
}

// node_modules/react-day-picker/dist/esm/components/Dropdown.js
import React11 from "react";
function Dropdown(props) {
  const _a = props, { options, className, components, classNames } = _a, selectProps = __objRest(_a, ["options", "className", "components", "classNames"]);
  const cssClassSelect = [classNames[UI.Dropdown], className].join(" ");
  const selectedOption = options == null ? void 0 : options.find(({ value }) => value === selectProps.value);
  return React11.createElement(
    "span",
    { "data-disabled": selectProps.disabled, className: classNames[UI.DropdownRoot] },
    React11.createElement(components.Select, __spreadValues({ className: cssClassSelect }, selectProps), options == null ? void 0 : options.map(({ value, label, disabled }) => React11.createElement(components.Option, { key: value, value, disabled }, label))),
    React11.createElement(
      "span",
      { className: classNames[UI.CaptionLabel], "aria-hidden": true },
      selectedOption == null ? void 0 : selectedOption.label,
      React11.createElement(components.Chevron, { orientation: "down", size: 18, className: classNames[UI.Chevron] })
    )
  );
}

// node_modules/react-day-picker/dist/esm/components/DropdownNav.js
import React12 from "react";
function DropdownNav(props) {
  return React12.createElement("div", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/Footer.js
import React13 from "react";
function Footer(props) {
  return React13.createElement("div", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/Month.js
import React14 from "react";
function Month(props) {
  const _a = props, { calendarMonth, displayIndex } = _a, divProps = __objRest(_a, ["calendarMonth", "displayIndex"]);
  return React14.createElement("div", __spreadValues({}, divProps), props.children);
}

// node_modules/react-day-picker/dist/esm/components/MonthCaption.js
import React15 from "react";
function MonthCaption(props) {
  const _a = props, { calendarMonth, displayIndex } = _a, divProps = __objRest(_a, ["calendarMonth", "displayIndex"]);
  return React15.createElement("div", __spreadValues({}, divProps));
}

// node_modules/react-day-picker/dist/esm/components/MonthGrid.js
import React16 from "react";
function MonthGrid(props) {
  return React16.createElement("table", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/Months.js
import React17 from "react";
function Months(props) {
  return React17.createElement("div", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
import React18 from "react";

// node_modules/react-day-picker/dist/esm/useDayPicker.js
import { createContext, useContext } from "react";
var dayPickerContext = createContext(void 0);
function useDayPicker() {
  const context = useContext(dayPickerContext);
  if (context === void 0) {
    throw new Error("useDayPicker() must be used within a custom component.");
  }
  return context;
}

// node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
function MonthsDropdown(props) {
  const { components } = useDayPicker();
  return React18.createElement(components.Dropdown, __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/Nav.js
import React19, { useCallback } from "react";
function Nav(props) {
  const _a = props, { onPreviousClick, onNextClick, previousMonth, nextMonth } = _a, navProps = __objRest(_a, ["onPreviousClick", "onNextClick", "previousMonth", "nextMonth"]);
  const { components, classNames, labels: { labelPrevious: labelPrevious2, labelNext: labelNext2 } } = useDayPicker();
  const handleNextClick = useCallback((e) => {
    if (nextMonth) {
      onNextClick == null ? void 0 : onNextClick(e);
    }
  }, [nextMonth, onNextClick]);
  const handlePreviousClick = useCallback((e) => {
    if (previousMonth) {
      onPreviousClick == null ? void 0 : onPreviousClick(e);
    }
  }, [previousMonth, onPreviousClick]);
  return React19.createElement(
    "nav",
    __spreadValues({}, navProps),
    React19.createElement(
      components.PreviousMonthButton,
      { type: "button", className: classNames[UI.PreviousMonthButton], tabIndex: previousMonth ? void 0 : -1, "aria-disabled": previousMonth ? void 0 : true, "aria-label": labelPrevious2(previousMonth), onClick: handlePreviousClick },
      React19.createElement(components.Chevron, { disabled: previousMonth ? void 0 : true, className: classNames[UI.Chevron], orientation: "left" })
    ),
    React19.createElement(
      components.NextMonthButton,
      { type: "button", className: classNames[UI.NextMonthButton], tabIndex: nextMonth ? void 0 : -1, "aria-disabled": nextMonth ? void 0 : true, "aria-label": labelNext2(nextMonth), onClick: handleNextClick },
      React19.createElement(components.Chevron, { disabled: nextMonth ? void 0 : true, orientation: "right", className: classNames[UI.Chevron] })
    )
  );
}

// node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
import React20 from "react";
function NextMonthButton(props) {
  const { components } = useDayPicker();
  return React20.createElement(components.Button, __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/Option.js
import React21 from "react";
function Option(props) {
  return React21.createElement("option", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
import React22 from "react";
function PreviousMonthButton(props) {
  const { components } = useDayPicker();
  return React22.createElement(components.Button, __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/Root.js
import React23 from "react";
function Root4(props) {
  const _a = props, { rootRef } = _a, rest = __objRest(_a, ["rootRef"]);
  return React23.createElement("div", __spreadProps(__spreadValues({}, rest), { ref: rootRef }));
}

// node_modules/react-day-picker/dist/esm/components/Select.js
import React24 from "react";
function Select(props) {
  return React24.createElement("select", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/Week.js
import React25 from "react";
function Week(props) {
  const _a = props, { week } = _a, trProps = __objRest(_a, ["week"]);
  return React25.createElement("tr", __spreadValues({}, trProps));
}

// node_modules/react-day-picker/dist/esm/components/Weekday.js
import React26 from "react";
function Weekday(props) {
  return React26.createElement("th", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/Weekdays.js
import React27 from "react";
function Weekdays(props) {
  return React27.createElement(
    "thead",
    { "aria-hidden": true },
    React27.createElement("tr", __spreadValues({}, props))
  );
}

// node_modules/react-day-picker/dist/esm/components/WeekNumber.js
import React28 from "react";
function WeekNumber(props) {
  const _a = props, { week } = _a, thProps = __objRest(_a, ["week"]);
  return React28.createElement("th", __spreadValues({}, thProps));
}

// node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
import React29 from "react";
function WeekNumberHeader(props) {
  return React29.createElement("th", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/Weeks.js
import React30 from "react";
function Weeks(props) {
  return React30.createElement("tbody", __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
import React31 from "react";
function YearsDropdown(props) {
  const { components } = useDayPicker();
  return React31.createElement(components.Dropdown, __spreadValues({}, props));
}

// node_modules/react-day-picker/dist/esm/helpers/getComponents.js
function getComponents(customComponents) {
  return __spreadValues(__spreadValues({}, custom_components_exports), customComponents);
}

// node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
function getDataAttributes(props) {
  var _a;
  const dataAttributes = {
    "data-mode": (_a = props.mode) != null ? _a : void 0,
    "data-required": "required" in props ? props.required : void 0,
    "data-multiple-months": props.numberOfMonths && props.numberOfMonths > 1 || void 0,
    "data-week-numbers": props.showWeekNumber || void 0,
    "data-broadcast-calendar": props.broadcastCalendar || void 0
  };
  Object.entries(props).forEach(([key, val]) => {
    if (key.startsWith("data-")) {
      dataAttributes[key] = val;
    }
  });
  return dataAttributes;
}

// node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
function getDefaultClassNames() {
  const classNames = {};
  for (const key in UI) {
    classNames[UI[key]] = `rdp-${UI[key]}`;
  }
  for (const key in DayFlag) {
    classNames[DayFlag[key]] = `rdp-${DayFlag[key]}`;
  }
  for (const key in SelectionState) {
    classNames[SelectionState[key]] = `rdp-${SelectionState[key]}`;
  }
  for (const key in Animation) {
    classNames[Animation[key]] = `rdp-${Animation[key]}`;
  }
  return classNames;
}

// node_modules/react-day-picker/dist/esm/formatters/index.js
var formatters_exports = {};
__export(formatters_exports, {
  formatCaption: () => formatCaption,
  formatDay: () => formatDay,
  formatMonthCaption: () => formatMonthCaption,
  formatMonthDropdown: () => formatMonthDropdown,
  formatWeekNumber: () => formatWeekNumber,
  formatWeekNumberHeader: () => formatWeekNumberHeader,
  formatWeekdayName: () => formatWeekdayName,
  formatYearCaption: () => formatYearCaption,
  formatYearDropdown: () => formatYearDropdown
});

// node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
function formatCaption(month, options, dateLib) {
  return (dateLib != null ? dateLib : new DateLib(options)).format(month, "LLLL y");
}
var formatMonthCaption = formatCaption;

// node_modules/react-day-picker/dist/esm/formatters/formatDay.js
function formatDay(date, options, dateLib) {
  return (dateLib != null ? dateLib : new DateLib(options)).format(date, "d");
}

// node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
function formatMonthDropdown(month, dateLib = defaultDateLib) {
  return dateLib.format(month, "LLLL");
}

// node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
function formatWeekNumber(weekNumber) {
  if (weekNumber < 10) {
    return `0${weekNumber.toLocaleString()}`;
  }
  return `${weekNumber.toLocaleString()}`;
}

// node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
function formatWeekNumberHeader() {
  return ``;
}

// node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
function formatWeekdayName(weekday, options, dateLib) {
  return (dateLib != null ? dateLib : new DateLib(options)).format(weekday, "cccccc");
}

// node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
function formatYearDropdown(year, dateLib = defaultDateLib) {
  return dateLib.format(year, "yyyy");
}
var formatYearCaption = formatYearDropdown;

// node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
function getFormatters(customFormatters) {
  if ((customFormatters == null ? void 0 : customFormatters.formatMonthCaption) && !customFormatters.formatCaption) {
    customFormatters.formatCaption = customFormatters.formatMonthCaption;
  }
  if ((customFormatters == null ? void 0 : customFormatters.formatYearCaption) && !customFormatters.formatYearDropdown) {
    customFormatters.formatYearDropdown = customFormatters.formatYearCaption;
  }
  return __spreadValues(__spreadValues({}, formatters_exports), customFormatters);
}

// node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
function getMonthOptions(displayMonth, navStart, navEnd, formatters2, dateLib) {
  const { startOfMonth: startOfMonth2, startOfYear: startOfYear2, endOfYear: endOfYear2, eachMonthOfInterval: eachMonthOfInterval2, getMonth: getMonth2 } = dateLib;
  const months = eachMonthOfInterval2({
    start: startOfYear2(displayMonth),
    end: endOfYear2(displayMonth)
  });
  const options = months.map((month) => {
    const label = formatters2.formatMonthDropdown(month, dateLib);
    const value = getMonth2(month);
    const disabled = navStart && month < startOfMonth2(navStart) || navEnd && month > startOfMonth2(navEnd) || false;
    return { value, label, disabled };
  });
  return options;
}

// node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
function getStyleForModifiers(dayModifiers, styles = {}, modifiersStyles = {}) {
  let style = __spreadValues({}, styles == null ? void 0 : styles[UI.Day]);
  Object.entries(dayModifiers).filter(([, active]) => active === true).forEach(([modifier]) => {
    style = __spreadValues(__spreadValues({}, style), modifiersStyles == null ? void 0 : modifiersStyles[modifier]);
  });
  return style;
}

// node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
function getWeekdays(dateLib, ISOWeek, broadcastCalendar) {
  const today = dateLib.today();
  const start = broadcastCalendar ? dateLib.startOfBroadcastWeek(today, dateLib) : ISOWeek ? dateLib.startOfISOWeek(today) : dateLib.startOfWeek(today);
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = dateLib.addDays(start, i);
    days.push(day);
  }
  return days;
}

// node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
function getYearOptions(navStart, navEnd, formatters2, dateLib) {
  if (!navStart)
    return void 0;
  if (!navEnd)
    return void 0;
  const { startOfYear: startOfYear2, endOfYear: endOfYear2, addYears: addYears2, getYear: getYear2, isBefore: isBefore2, isSameYear: isSameYear2 } = dateLib;
  const firstNavYear = startOfYear2(navStart);
  const lastNavYear = endOfYear2(navEnd);
  const years = [];
  let year = firstNavYear;
  while (isBefore2(year, lastNavYear) || isSameYear2(year, lastNavYear)) {
    years.push(year);
    year = addYears2(year, 1);
  }
  return years.map((year2) => {
    const label = formatters2.formatYearDropdown(year2, dateLib);
    return {
      value: getYear2(year2),
      label,
      disabled: false
    };
  });
}

// node_modules/react-day-picker/dist/esm/labels/index.js
var labels_exports = {};
__export(labels_exports, {
  labelCaption: () => labelCaption,
  labelDay: () => labelDay,
  labelDayButton: () => labelDayButton,
  labelGrid: () => labelGrid,
  labelGridcell: () => labelGridcell,
  labelMonthDropdown: () => labelMonthDropdown,
  labelNav: () => labelNav,
  labelNext: () => labelNext,
  labelPrevious: () => labelPrevious,
  labelWeekNumber: () => labelWeekNumber,
  labelWeekNumberHeader: () => labelWeekNumberHeader,
  labelWeekday: () => labelWeekday,
  labelYearDropdown: () => labelYearDropdown
});

// node_modules/react-day-picker/dist/esm/labels/labelGrid.js
function labelGrid(date, options, dateLib) {
  return (dateLib != null ? dateLib : new DateLib(options)).format(date, "LLLL y");
}
var labelCaption = labelGrid;

// node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
function labelGridcell(date, modifiers, options, dateLib) {
  let label = (dateLib != null ? dateLib : new DateLib(options)).format(date, "PPPP");
  if (modifiers == null ? void 0 : modifiers.today) {
    label = `Today, ${label}`;
  }
  return label;
}

// node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
function labelDayButton(date, modifiers, options, dateLib) {
  let label = (dateLib != null ? dateLib : new DateLib(options)).format(date, "PPPP");
  if (modifiers.today)
    label = `Today, ${label}`;
  if (modifiers.selected)
    label = `${label}, selected`;
  return label;
}
var labelDay = labelDayButton;

// node_modules/react-day-picker/dist/esm/labels/labelNav.js
function labelNav() {
  return "";
}

// node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
function labelMonthDropdown(options) {
  return "Choose the Month";
}

// node_modules/react-day-picker/dist/esm/labels/labelNext.js
function labelNext(month) {
  return "Go to the Next Month";
}

// node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
function labelPrevious(month) {
  return "Go to the Previous Month";
}

// node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
function labelWeekday(date, options, dateLib) {
  return (dateLib != null ? dateLib : new DateLib(options)).format(date, "cccc");
}

// node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
function labelWeekNumber(weekNumber, options) {
  return `Week ${weekNumber}`;
}

// node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
function labelWeekNumberHeader(options) {
  return "Week Number";
}

// node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
function labelYearDropdown(options) {
  return "Choose the Year";
}

// node_modules/react-day-picker/dist/esm/useAnimation.js
import { useLayoutEffect, useRef } from "react";
var asHtmlElement = (element) => {
  if (element instanceof HTMLElement)
    return element;
  return null;
};
var queryMonthEls = (element) => {
  var _a;
  return [
    ...(_a = element.querySelectorAll("[data-animated-month]")) != null ? _a : []
  ];
};
var queryMonthEl = (element) => asHtmlElement(element.querySelector("[data-animated-month]"));
var queryCaptionEl = (element) => asHtmlElement(element.querySelector("[data-animated-caption]"));
var queryWeeksEl = (element) => asHtmlElement(element.querySelector("[data-animated-weeks]"));
var queryNavEl = (element) => asHtmlElement(element.querySelector("[data-animated-nav]"));
var queryWeekdaysEl = (element) => asHtmlElement(element.querySelector("[data-animated-weekdays]"));
function useAnimation(rootElRef, enabled, { classNames, months, focused, dateLib }) {
  const previousRootElSnapshotRef = useRef(null);
  const previousMonthsRef = useRef(months);
  const animatingRef = useRef(false);
  useLayoutEffect(() => {
    const previousMonths = previousMonthsRef.current;
    previousMonthsRef.current = months;
    if (!enabled || !rootElRef.current || // safety check because the ref can be set to anything by consumers
    !(rootElRef.current instanceof HTMLElement) || // validation required for the animation to work as expected
    months.length === 0 || previousMonths.length === 0 || months.length !== previousMonths.length) {
      return;
    }
    const isSameMonth2 = dateLib.isSameMonth(months[0].date, previousMonths[0].date);
    const isAfterPreviousMonth = dateLib.isAfter(months[0].date, previousMonths[0].date);
    const captionAnimationClass = isAfterPreviousMonth ? classNames[Animation.caption_after_enter] : classNames[Animation.caption_before_enter];
    const weeksAnimationClass = isAfterPreviousMonth ? classNames[Animation.weeks_after_enter] : classNames[Animation.weeks_before_enter];
    const previousRootElSnapshot = previousRootElSnapshotRef.current;
    const rootElSnapshot = rootElRef.current.cloneNode(true);
    if (rootElSnapshot instanceof HTMLElement) {
      const currentMonthElsSnapshot = queryMonthEls(rootElSnapshot);
      currentMonthElsSnapshot.forEach((currentMonthElSnapshot) => {
        if (!(currentMonthElSnapshot instanceof HTMLElement))
          return;
        const previousMonthElSnapshot = queryMonthEl(currentMonthElSnapshot);
        if (previousMonthElSnapshot && currentMonthElSnapshot.contains(previousMonthElSnapshot)) {
          currentMonthElSnapshot.removeChild(previousMonthElSnapshot);
        }
        const captionEl = queryCaptionEl(currentMonthElSnapshot);
        if (captionEl) {
          captionEl.classList.remove(captionAnimationClass);
        }
        const weeksEl = queryWeeksEl(currentMonthElSnapshot);
        if (weeksEl) {
          weeksEl.classList.remove(weeksAnimationClass);
        }
      });
      previousRootElSnapshotRef.current = rootElSnapshot;
    } else {
      previousRootElSnapshotRef.current = null;
    }
    if (animatingRef.current || isSameMonth2 || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    focused) {
      return;
    }
    const previousMonthEls = previousRootElSnapshot instanceof HTMLElement ? queryMonthEls(previousRootElSnapshot) : [];
    const currentMonthEls = queryMonthEls(rootElRef.current);
    if (currentMonthEls && currentMonthEls.every((el) => el instanceof HTMLElement) && previousMonthEls && previousMonthEls.every((el) => el instanceof HTMLElement)) {
      animatingRef.current = true;
      const cleanUpFunctions = [];
      rootElRef.current.style.isolation = "isolate";
      const navEl = queryNavEl(rootElRef.current);
      if (navEl) {
        navEl.style.zIndex = "1";
      }
      currentMonthEls.forEach((currentMonthEl, index) => {
        const previousMonthEl = previousMonthEls[index];
        if (!previousMonthEl) {
          return;
        }
        currentMonthEl.style.position = "relative";
        currentMonthEl.style.overflow = "hidden";
        const captionEl = queryCaptionEl(currentMonthEl);
        if (captionEl) {
          captionEl.classList.add(captionAnimationClass);
        }
        const weeksEl = queryWeeksEl(currentMonthEl);
        if (weeksEl) {
          weeksEl.classList.add(weeksAnimationClass);
        }
        const cleanUp = () => {
          animatingRef.current = false;
          if (rootElRef.current) {
            rootElRef.current.style.isolation = "";
          }
          if (navEl) {
            navEl.style.zIndex = "";
          }
          if (captionEl) {
            captionEl.classList.remove(captionAnimationClass);
          }
          if (weeksEl) {
            weeksEl.classList.remove(weeksAnimationClass);
          }
          currentMonthEl.style.position = "";
          currentMonthEl.style.overflow = "";
          if (currentMonthEl.contains(previousMonthEl)) {
            currentMonthEl.removeChild(previousMonthEl);
          }
        };
        cleanUpFunctions.push(cleanUp);
        previousMonthEl.style.pointerEvents = "none";
        previousMonthEl.style.position = "absolute";
        previousMonthEl.style.overflow = "hidden";
        previousMonthEl.setAttribute("aria-hidden", "true");
        const previousWeekdaysEl = queryWeekdaysEl(previousMonthEl);
        if (previousWeekdaysEl) {
          previousWeekdaysEl.style.opacity = "0";
        }
        const previousCaptionEl = queryCaptionEl(previousMonthEl);
        if (previousCaptionEl) {
          previousCaptionEl.classList.add(isAfterPreviousMonth ? classNames[Animation.caption_before_exit] : classNames[Animation.caption_after_exit]);
          previousCaptionEl.addEventListener("animationend", cleanUp);
        }
        const previousWeeksEl = queryWeeksEl(previousMonthEl);
        if (previousWeeksEl) {
          previousWeeksEl.classList.add(isAfterPreviousMonth ? classNames[Animation.weeks_before_exit] : classNames[Animation.weeks_after_exit]);
        }
        currentMonthEl.insertBefore(previousMonthEl, currentMonthEl.firstChild);
      });
    }
  });
}

// node_modules/react-day-picker/dist/esm/useCalendar.js
import { useEffect } from "react";

// node_modules/react-day-picker/dist/esm/helpers/getDates.js
function getDates(displayMonths, maxDate, props, dateLib) {
  const firstMonth = displayMonths[0];
  const lastMonth = displayMonths[displayMonths.length - 1];
  const { ISOWeek, fixedWeeks, broadcastCalendar } = props != null ? props : {};
  const { addDays: addDays2, differenceInCalendarDays: differenceInCalendarDays2, differenceInCalendarMonths: differenceInCalendarMonths2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfMonth: endOfMonth2, endOfWeek: endOfWeek2, isAfter: isAfter2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const startWeekFirstDate = broadcastCalendar ? startOfBroadcastWeek2(firstMonth, dateLib) : ISOWeek ? startOfISOWeek2(firstMonth) : startOfWeek2(firstMonth);
  const endWeekLastDate = broadcastCalendar ? endOfBroadcastWeek2(lastMonth, dateLib) : ISOWeek ? endOfISOWeek2(endOfMonth2(lastMonth)) : endOfWeek2(endOfMonth2(lastMonth));
  const nOfDays = differenceInCalendarDays2(endWeekLastDate, startWeekFirstDate);
  const nOfMonths = differenceInCalendarMonths2(lastMonth, firstMonth) + 1;
  const dates = [];
  for (let i = 0; i <= nOfDays; i++) {
    const date = addDays2(startWeekFirstDate, i);
    if (maxDate && isAfter2(date, maxDate)) {
      break;
    }
    dates.push(date);
  }
  const nrOfDaysWithFixedWeeks = broadcastCalendar ? 35 : 42;
  const extraDates = nrOfDaysWithFixedWeeks * nOfMonths;
  if (fixedWeeks && dates.length < extraDates) {
    const daysToAdd = extraDates - dates.length;
    for (let i = 0; i < daysToAdd; i++) {
      const date = addDays2(dates[dates.length - 1], 1);
      dates.push(date);
    }
  }
  return dates;
}

// node_modules/react-day-picker/dist/esm/helpers/getDays.js
function getDays(calendarMonths) {
  const initialDays = [];
  return calendarMonths.reduce((days, month) => {
    const initialDays2 = [];
    const weekDays = month.weeks.reduce((weekDays2, week) => {
      return [...weekDays2, ...week.days];
    }, initialDays2);
    return [...days, ...weekDays];
  }, initialDays);
}

// node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
function getDisplayMonths(firstDisplayedMonth, calendarEndMonth, props, dateLib) {
  const { numberOfMonths = 1 } = props;
  const months = [];
  for (let i = 0; i < numberOfMonths; i++) {
    const month = dateLib.addMonths(firstDisplayedMonth, i);
    if (calendarEndMonth && month > calendarEndMonth) {
      break;
    }
    months.push(month);
  }
  return months;
}

// node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
function getInitialMonth(props, dateLib) {
  const { month, defaultMonth, today = dateLib.today(), numberOfMonths = 1, endMonth, startMonth, timeZone } = props;
  let initialMonth = month || defaultMonth || today;
  const { differenceInCalendarMonths: differenceInCalendarMonths2, addMonths: addMonths2, startOfMonth: startOfMonth2 } = dateLib;
  if (endMonth && differenceInCalendarMonths2(endMonth, initialMonth) < 0) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths2(endMonth, offset);
  }
  if (startMonth && differenceInCalendarMonths2(initialMonth, startMonth) < 0) {
    initialMonth = startMonth;
  }
  initialMonth = timeZone ? new TZDate(initialMonth, timeZone) : initialMonth;
  return startOfMonth2(initialMonth);
}

// node_modules/react-day-picker/dist/esm/classes/CalendarDay.js
var CalendarDay = class {
  constructor(date, displayMonth, dateLib = defaultDateLib) {
    this.date = date;
    this.displayMonth = displayMonth;
    this.outside = Boolean(displayMonth && !dateLib.isSameMonth(date, displayMonth));
    this.dateLib = dateLib;
  }
  /**
   * Check if the day is the same as the given day: considering if it is in the
   * same display month.
   */
  isEqualTo(day) {
    return this.dateLib.isSameDay(day.date, this.date) && this.dateLib.isSameMonth(day.displayMonth, this.displayMonth);
  }
};

// node_modules/react-day-picker/dist/esm/classes/CalendarMonth.js
var CalendarMonth = class {
  constructor(month, weeks) {
    this.date = month;
    this.weeks = weeks;
  }
};

// node_modules/react-day-picker/dist/esm/classes/CalendarWeek.js
var CalendarWeek = class {
  constructor(weekNumber, days) {
    this.days = days;
    this.weekNumber = weekNumber;
  }
};

// node_modules/react-day-picker/dist/esm/helpers/getMonths.js
function getMonths(displayMonths, dates, props, dateLib) {
  const { addDays: addDays2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfMonth: endOfMonth2, endOfWeek: endOfWeek2, getISOWeek: getISOWeek2, getWeek: getWeek2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const dayPickerMonths = displayMonths.reduce((months, month) => {
    const firstDateOfFirstWeek = props.broadcastCalendar ? startOfBroadcastWeek2(month, dateLib) : props.ISOWeek ? startOfISOWeek2(month) : startOfWeek2(month);
    const lastDateOfLastWeek = props.broadcastCalendar ? endOfBroadcastWeek2(month, dateLib) : props.ISOWeek ? endOfISOWeek2(endOfMonth2(month)) : endOfWeek2(endOfMonth2(month));
    const monthDates = dates.filter((date) => {
      return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
    });
    const nrOfDaysWithFixedWeeks = props.broadcastCalendar ? 35 : 42;
    if (props.fixedWeeks && monthDates.length < nrOfDaysWithFixedWeeks) {
      const extraDates = dates.filter((date) => {
        const daysToAdd = nrOfDaysWithFixedWeeks - monthDates.length;
        return date > lastDateOfLastWeek && date <= addDays2(lastDateOfLastWeek, daysToAdd);
      });
      monthDates.push(...extraDates);
    }
    const weeks = monthDates.reduce((weeks2, date) => {
      const weekNumber = props.ISOWeek ? getISOWeek2(date) : getWeek2(date);
      const week = weeks2.find((week2) => week2.weekNumber === weekNumber);
      const day = new CalendarDay(date, month, dateLib);
      if (!week) {
        weeks2.push(new CalendarWeek(weekNumber, [day]));
      } else {
        week.days.push(day);
      }
      return weeks2;
    }, []);
    const dayPickerMonth = new CalendarMonth(month, weeks);
    months.push(dayPickerMonth);
    return months;
  }, []);
  if (!props.reverseMonths) {
    return dayPickerMonths;
  } else {
    return dayPickerMonths.reverse();
  }
}

// node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
function getNavMonths(props, dateLib) {
  var _a, _b;
  let { startMonth, endMonth } = props;
  const { startOfYear: startOfYear2, startOfDay: startOfDay2, startOfMonth: startOfMonth2, endOfMonth: endOfMonth2, addYears: addYears2, endOfYear: endOfYear2, newDate, today } = dateLib;
  const { fromYear, toYear, fromMonth, toMonth } = props;
  if (!startMonth && fromMonth) {
    startMonth = fromMonth;
  }
  if (!startMonth && fromYear) {
    startMonth = dateLib.newDate(fromYear, 0, 1);
  }
  if (!endMonth && toMonth) {
    endMonth = toMonth;
  }
  if (!endMonth && toYear) {
    endMonth = newDate(toYear, 11, 31);
  }
  const hasYearDropdown = props.captionLayout === "dropdown" || props.captionLayout === "dropdown-years";
  if (startMonth) {
    startMonth = startOfMonth2(startMonth);
  } else if (fromYear) {
    startMonth = newDate(fromYear, 0, 1);
  } else if (!startMonth && hasYearDropdown) {
    startMonth = startOfYear2(addYears2((_a = props.today) != null ? _a : today(), -100));
  }
  if (endMonth) {
    endMonth = endOfMonth2(endMonth);
  } else if (toYear) {
    endMonth = newDate(toYear, 11, 31);
  } else if (!endMonth && hasYearDropdown) {
    endMonth = endOfYear2((_b = props.today) != null ? _b : today());
  }
  return [
    startMonth ? startOfDay2(startMonth) : startMonth,
    endMonth ? startOfDay2(endMonth) : endMonth
  ];
}

// node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
function getNextMonth(firstDisplayedMonth, calendarEndMonth, options, dateLib) {
  if (options.disableNavigation) {
    return void 0;
  }
  const { pagedNavigation, numberOfMonths = 1 } = options;
  const { startOfMonth: startOfMonth2, addMonths: addMonths2, differenceInCalendarMonths: differenceInCalendarMonths2 } = dateLib;
  const offset = pagedNavigation ? numberOfMonths : 1;
  const month = startOfMonth2(firstDisplayedMonth);
  if (!calendarEndMonth) {
    return addMonths2(month, offset);
  }
  const monthsDiff = differenceInCalendarMonths2(calendarEndMonth, firstDisplayedMonth);
  if (monthsDiff < numberOfMonths) {
    return void 0;
  }
  return addMonths2(month, offset);
}

// node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
function getPreviousMonth(firstDisplayedMonth, calendarStartMonth, options, dateLib) {
  if (options.disableNavigation) {
    return void 0;
  }
  const { pagedNavigation, numberOfMonths } = options;
  const { startOfMonth: startOfMonth2, addMonths: addMonths2, differenceInCalendarMonths: differenceInCalendarMonths2 } = dateLib;
  const offset = pagedNavigation ? numberOfMonths != null ? numberOfMonths : 1 : 1;
  const month = startOfMonth2(firstDisplayedMonth);
  if (!calendarStartMonth) {
    return addMonths2(month, -offset);
  }
  const monthsDiff = differenceInCalendarMonths2(month, calendarStartMonth);
  if (monthsDiff <= 0) {
    return void 0;
  }
  return addMonths2(month, -offset);
}

// node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
function getWeeks(months) {
  const initialWeeks = [];
  return months.reduce((weeks, month) => {
    return [...weeks, ...month.weeks];
  }, initialWeeks);
}

// node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
import { useState } from "react";
function useControlledValue(defaultValue, controlledValue) {
  const [uncontrolledValue, setValue] = useState(defaultValue);
  const value = controlledValue === void 0 ? uncontrolledValue : controlledValue;
  return [value, setValue];
}

// node_modules/react-day-picker/dist/esm/useCalendar.js
function useCalendar(props, dateLib) {
  const [navStart, navEnd] = getNavMonths(props, dateLib);
  const { startOfMonth: startOfMonth2, endOfMonth: endOfMonth2 } = dateLib;
  const initialMonth = getInitialMonth(props, dateLib);
  const [firstMonth, setFirstMonth] = useControlledValue(
    initialMonth,
    // initialMonth is always computed from props.month if provided
    props.month ? initialMonth : void 0
  );
  useEffect(() => {
    const newInitialMonth = getInitialMonth(props, dateLib);
    setFirstMonth(newInitialMonth);
  }, [props.timeZone]);
  const displayMonths = getDisplayMonths(firstMonth, navEnd, props, dateLib);
  const dates = getDates(displayMonths, props.endMonth ? endOfMonth2(props.endMonth) : void 0, props, dateLib);
  const months = getMonths(displayMonths, dates, props, dateLib);
  const weeks = getWeeks(months);
  const days = getDays(months);
  const previousMonth = getPreviousMonth(firstMonth, navStart, props, dateLib);
  const nextMonth = getNextMonth(firstMonth, navEnd, props, dateLib);
  const { disableNavigation, onMonthChange } = props;
  const isDayInCalendar = (day) => weeks.some((week) => week.days.some((d) => d.isEqualTo(day)));
  const goToMonth = (date) => {
    if (disableNavigation) {
      return;
    }
    let newMonth = startOfMonth2(date);
    if (navStart && newMonth < startOfMonth2(navStart)) {
      newMonth = startOfMonth2(navStart);
    }
    if (navEnd && newMonth > startOfMonth2(navEnd)) {
      newMonth = startOfMonth2(navEnd);
    }
    setFirstMonth(newMonth);
    onMonthChange == null ? void 0 : onMonthChange(newMonth);
  };
  const goToDay = (day) => {
    if (isDayInCalendar(day)) {
      return;
    }
    goToMonth(day.date);
  };
  const calendar = {
    months,
    weeks,
    days,
    navStart,
    navEnd,
    previousMonth,
    nextMonth,
    goToMonth,
    goToDay
  };
  return calendar;
}

// node_modules/react-day-picker/dist/esm/useFocus.js
import { useState as useState2 } from "react";

// node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var FocusTargetPriority;
(function(FocusTargetPriority2) {
  FocusTargetPriority2[FocusTargetPriority2["Today"] = 0] = "Today";
  FocusTargetPriority2[FocusTargetPriority2["Selected"] = 1] = "Selected";
  FocusTargetPriority2[FocusTargetPriority2["LastFocused"] = 2] = "LastFocused";
  FocusTargetPriority2[FocusTargetPriority2["FocusedModifier"] = 3] = "FocusedModifier";
})(FocusTargetPriority || (FocusTargetPriority = {}));
function isFocusableDay(modifiers) {
  return !modifiers[DayFlag.disabled] && !modifiers[DayFlag.hidden] && !modifiers[DayFlag.outside];
}
function calculateFocusTarget(days, getModifiers, isSelected, lastFocused) {
  let focusTarget;
  let foundFocusTargetPriority = -1;
  for (const day of days) {
    const modifiers = getModifiers(day);
    if (isFocusableDay(modifiers)) {
      if (modifiers[DayFlag.focused] && foundFocusTargetPriority < FocusTargetPriority.FocusedModifier) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.FocusedModifier;
      } else if ((lastFocused == null ? void 0 : lastFocused.isEqualTo(day)) && foundFocusTargetPriority < FocusTargetPriority.LastFocused) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.LastFocused;
      } else if (isSelected(day.date) && foundFocusTargetPriority < FocusTargetPriority.Selected) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.Selected;
      } else if (modifiers[DayFlag.today] && foundFocusTargetPriority < FocusTargetPriority.Today) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.Today;
      }
    }
  }
  if (!focusTarget) {
    focusTarget = days.find((day) => isFocusableDay(getModifiers(day)));
  }
  return focusTarget;
}

// node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
function rangeIncludesDate(range, date, excludeEnds = false, dateLib = defaultDateLib) {
  let { from, to } = range;
  const { differenceInCalendarDays: differenceInCalendarDays2, isSameDay: isSameDay2 } = dateLib;
  if (from && to) {
    const isRangeInverted = differenceInCalendarDays2(to, from) < 0;
    if (isRangeInverted) {
      [from, to] = [to, from];
    }
    const isInRange = differenceInCalendarDays2(date, from) >= (excludeEnds ? 1 : 0) && differenceInCalendarDays2(to, date) >= (excludeEnds ? 1 : 0);
    return isInRange;
  }
  if (!excludeEnds && to) {
    return isSameDay2(to, date);
  }
  if (!excludeEnds && from) {
    return isSameDay2(from, date);
  }
  return false;
}

// node_modules/react-day-picker/dist/esm/utils/typeguards.js
function isDateInterval(matcher) {
  return Boolean(matcher && typeof matcher === "object" && "before" in matcher && "after" in matcher);
}
function isDateRange(value) {
  return Boolean(value && typeof value === "object" && "from" in value);
}
function isDateAfterType(value) {
  return Boolean(value && typeof value === "object" && "after" in value);
}
function isDateBeforeType(value) {
  return Boolean(value && typeof value === "object" && "before" in value);
}
function isDayOfWeekType(value) {
  return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
function isDatesArray(value, dateLib) {
  return Array.isArray(value) && value.every(dateLib.isDate);
}

// node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
function dateMatchModifiers(date, matchers, dateLib = defaultDateLib) {
  const matchersArr = !Array.isArray(matchers) ? [matchers] : matchers;
  const { isSameDay: isSameDay2, differenceInCalendarDays: differenceInCalendarDays2, isAfter: isAfter2 } = dateLib;
  return matchersArr.some((matcher) => {
    if (typeof matcher === "boolean") {
      return matcher;
    }
    if (dateLib.isDate(matcher)) {
      return isSameDay2(date, matcher);
    }
    if (isDatesArray(matcher, dateLib)) {
      return matcher.includes(date);
    }
    if (isDateRange(matcher)) {
      return rangeIncludesDate(matcher, date, false, dateLib);
    }
    if (isDayOfWeekType(matcher)) {
      if (!Array.isArray(matcher.dayOfWeek)) {
        return matcher.dayOfWeek === date.getDay();
      }
      return matcher.dayOfWeek.includes(date.getDay());
    }
    if (isDateInterval(matcher)) {
      const diffBefore = differenceInCalendarDays2(matcher.before, date);
      const diffAfter = differenceInCalendarDays2(matcher.after, date);
      const isDayBefore = diffBefore > 0;
      const isDayAfter = diffAfter < 0;
      const isClosedInterval = isAfter2(matcher.before, matcher.after);
      if (isClosedInterval) {
        return isDayAfter && isDayBefore;
      } else {
        return isDayBefore || isDayAfter;
      }
    }
    if (isDateAfterType(matcher)) {
      return differenceInCalendarDays2(date, matcher.after) > 0;
    }
    if (isDateBeforeType(matcher)) {
      return differenceInCalendarDays2(matcher.before, date) > 0;
    }
    if (typeof matcher === "function") {
      return matcher(date);
    }
    return false;
  });
}

// node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
function getFocusableDate(moveBy, moveDir, refDate, navStart, navEnd, props, dateLib) {
  const { ISOWeek, broadcastCalendar } = props;
  const { addDays: addDays2, addMonths: addMonths2, addWeeks: addWeeks2, addYears: addYears2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfWeek: endOfWeek2, max: max2, min: min2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const moveFns = {
    day: addDays2,
    week: addWeeks2,
    month: addMonths2,
    year: addYears2,
    startOfWeek: (date) => broadcastCalendar ? startOfBroadcastWeek2(date, dateLib) : ISOWeek ? startOfISOWeek2(date) : startOfWeek2(date),
    endOfWeek: (date) => broadcastCalendar ? endOfBroadcastWeek2(date, dateLib) : ISOWeek ? endOfISOWeek2(date) : endOfWeek2(date)
  };
  let focusableDate = moveFns[moveBy](refDate, moveDir === "after" ? 1 : -1);
  if (moveDir === "before" && navStart) {
    focusableDate = max2([navStart, focusableDate]);
  } else if (moveDir === "after" && navEnd) {
    focusableDate = min2([navEnd, focusableDate]);
  }
  return focusableDate;
}

// node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
function getNextFocus(moveBy, moveDir, refDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt = 0) {
  if (attempt > 365) {
    return void 0;
  }
  const focusableDate = getFocusableDate(
    moveBy,
    moveDir,
    refDay.date,
    // should be refDay? or refDay.date?
    calendarStartMonth,
    calendarEndMonth,
    props,
    dateLib
  );
  const isDisabled = Boolean(props.disabled && dateMatchModifiers(focusableDate, props.disabled, dateLib));
  const isHidden = Boolean(props.hidden && dateMatchModifiers(focusableDate, props.hidden, dateLib));
  const targetMonth = focusableDate;
  const focusDay = new CalendarDay(focusableDate, targetMonth, dateLib);
  if (!isDisabled && !isHidden) {
    return focusDay;
  }
  return getNextFocus(moveBy, moveDir, focusDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt + 1);
}

// node_modules/react-day-picker/dist/esm/useFocus.js
function useFocus(props, calendar, getModifiers, isSelected, dateLib) {
  const { autoFocus } = props;
  const [lastFocused, setLastFocused] = useState2();
  const focusTarget = calculateFocusTarget(calendar.days, getModifiers, isSelected || (() => false), lastFocused);
  const [focusedDay, setFocused] = useState2(autoFocus ? focusTarget : void 0);
  const blur = () => {
    setLastFocused(focusedDay);
    setFocused(void 0);
  };
  const moveFocus = (moveBy, moveDir) => {
    if (!focusedDay)
      return;
    const nextFocus = getNextFocus(moveBy, moveDir, focusedDay, calendar.navStart, calendar.navEnd, props, dateLib);
    if (!nextFocus)
      return;
    calendar.goToDay(nextFocus);
    setFocused(nextFocus);
  };
  const isFocusTarget = (day) => {
    return Boolean(focusTarget == null ? void 0 : focusTarget.isEqualTo(day));
  };
  const useFocus2 = {
    isFocusTarget,
    setFocused,
    focused: focusedDay,
    blur,
    moveFocus
  };
  return useFocus2;
}

// node_modules/react-day-picker/dist/esm/useGetModifiers.js
function useGetModifiers(days, props, dateLib) {
  const { disabled, hidden, modifiers, showOutsideDays, broadcastCalendar, today } = props;
  const { isSameDay: isSameDay2, isSameMonth: isSameMonth2, startOfMonth: startOfMonth2, isBefore: isBefore2, endOfMonth: endOfMonth2, isAfter: isAfter2 } = dateLib;
  const startMonth = props.startMonth && startOfMonth2(props.startMonth);
  const endMonth = props.endMonth && endOfMonth2(props.endMonth);
  const internalModifiersMap = {
    [DayFlag.focused]: [],
    [DayFlag.outside]: [],
    [DayFlag.disabled]: [],
    [DayFlag.hidden]: [],
    [DayFlag.today]: []
  };
  const customModifiersMap = {};
  for (const day of days) {
    const { date, displayMonth } = day;
    const isOutside = Boolean(displayMonth && !isSameMonth2(date, displayMonth));
    const isBeforeStartMonth = Boolean(startMonth && isBefore2(date, startMonth));
    const isAfterEndMonth = Boolean(endMonth && isAfter2(date, endMonth));
    const isDisabled = Boolean(disabled && dateMatchModifiers(date, disabled, dateLib));
    const isHidden = Boolean(hidden && dateMatchModifiers(date, hidden, dateLib)) || isBeforeStartMonth || isAfterEndMonth || // Broadcast calendar will show outside days as default
    !broadcastCalendar && !showOutsideDays && isOutside || broadcastCalendar && showOutsideDays === false && isOutside;
    const isToday = isSameDay2(date, today != null ? today : dateLib.today());
    if (isOutside)
      internalModifiersMap.outside.push(day);
    if (isDisabled)
      internalModifiersMap.disabled.push(day);
    if (isHidden)
      internalModifiersMap.hidden.push(day);
    if (isToday)
      internalModifiersMap.today.push(day);
    if (modifiers) {
      Object.keys(modifiers).forEach((name) => {
        const modifierValue = modifiers == null ? void 0 : modifiers[name];
        const isMatch = modifierValue ? dateMatchModifiers(date, modifierValue, dateLib) : false;
        if (!isMatch)
          return;
        if (customModifiersMap[name]) {
          customModifiersMap[name].push(day);
        } else {
          customModifiersMap[name] = [day];
        }
      });
    }
  }
  return (day) => {
    const dayFlags = {
      [DayFlag.focused]: false,
      [DayFlag.disabled]: false,
      [DayFlag.hidden]: false,
      [DayFlag.outside]: false,
      [DayFlag.today]: false
    };
    const customModifiers = {};
    for (const name in internalModifiersMap) {
      const days2 = internalModifiersMap[name];
      dayFlags[name] = days2.some((d) => d === day);
    }
    for (const name in customModifiersMap) {
      customModifiers[name] = customModifiersMap[name].some((d) => d === day);
    }
    return __spreadValues(__spreadValues({}, dayFlags), customModifiers);
  };
}

// node_modules/react-day-picker/dist/esm/selection/useMulti.js
function useMulti(props, dateLib) {
  const { selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const { isSameDay: isSameDay2 } = dateLib;
  const isSelected = (date) => {
    var _a;
    return (_a = selected == null ? void 0 : selected.some((d) => isSameDay2(d, date))) != null ? _a : false;
  };
  const { min: min2, max: max2 } = props;
  const select = (triggerDate, modifiers, e) => {
    let newDates = [...selected != null ? selected : []];
    if (isSelected(triggerDate)) {
      if ((selected == null ? void 0 : selected.length) === min2) {
        return;
      }
      if (required && (selected == null ? void 0 : selected.length) === 1) {
        return;
      }
      newDates = selected == null ? void 0 : selected.filter((d) => !isSameDay2(d, triggerDate));
    } else {
      if ((selected == null ? void 0 : selected.length) === max2) {
        newDates = [triggerDate];
      } else {
        newDates = [...newDates, triggerDate];
      }
    }
    if (!onSelect) {
      setSelected(newDates);
    }
    onSelect == null ? void 0 : onSelect(newDates, triggerDate, modifiers, e);
    return newDates;
  };
  return {
    selected,
    select,
    isSelected
  };
}

// node_modules/react-day-picker/dist/esm/utils/addToRange.js
function addToRange(date, initialRange, min2 = 0, max2 = 0, required = false, dateLib = defaultDateLib) {
  const { from, to } = initialRange || {};
  const { isSameDay: isSameDay2, isAfter: isAfter2, isBefore: isBefore2 } = dateLib;
  let range;
  if (!from && !to) {
    range = { from: date, to: min2 > 0 ? void 0 : date };
  } else if (from && !to) {
    if (isSameDay2(from, date)) {
      if (required) {
        range = { from, to: void 0 };
      } else {
        range = void 0;
      }
    } else if (isBefore2(date, from)) {
      range = { from: date, to: from };
    } else {
      range = { from, to: date };
    }
  } else if (from && to) {
    if (isSameDay2(from, date) && isSameDay2(to, date)) {
      if (required) {
        range = { from, to };
      } else {
        range = void 0;
      }
    } else if (isSameDay2(from, date)) {
      range = { from, to: min2 > 0 ? void 0 : date };
    } else if (isSameDay2(to, date)) {
      range = { from: date, to: min2 > 0 ? void 0 : date };
    } else if (isBefore2(date, from)) {
      range = { from: date, to };
    } else if (isAfter2(date, from)) {
      range = { from, to: date };
    } else if (isAfter2(date, to)) {
      range = { from, to: date };
    } else {
      throw new Error("Invalid range");
    }
  }
  if ((range == null ? void 0 : range.from) && (range == null ? void 0 : range.to)) {
    const diff = dateLib.differenceInCalendarDays(range.to, range.from);
    if (max2 > 0 && diff > max2) {
      range = { from: date, to: void 0 };
    } else if (min2 > 1 && diff < min2) {
      range = { from: date, to: void 0 };
    }
  }
  return range;
}

// node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
function rangeContainsDayOfWeek(range, dayOfWeek, dateLib = defaultDateLib) {
  const dayOfWeekArr = !Array.isArray(dayOfWeek) ? [dayOfWeek] : dayOfWeek;
  let date = range.from;
  const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
  const totalDaysLimit = Math.min(totalDays, 6);
  for (let i = 0; i <= totalDaysLimit; i++) {
    if (dayOfWeekArr.includes(date.getDay())) {
      return true;
    }
    date = dateLib.addDays(date, 1);
  }
  return false;
}

// node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
function rangeOverlaps(rangeLeft, rangeRight, dateLib = defaultDateLib) {
  return rangeIncludesDate(rangeLeft, rangeRight.from, false, dateLib) || rangeIncludesDate(rangeLeft, rangeRight.to, false, dateLib) || rangeIncludesDate(rangeRight, rangeLeft.from, false, dateLib) || rangeIncludesDate(rangeRight, rangeLeft.to, false, dateLib);
}

// node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
function rangeContainsModifiers(range, modifiers, dateLib = defaultDateLib) {
  const matchers = Array.isArray(modifiers) ? modifiers : [modifiers];
  const nonFunctionMatchers = matchers.filter((matcher) => typeof matcher !== "function");
  const nonFunctionMatchersResult = nonFunctionMatchers.some((matcher) => {
    if (typeof matcher === "boolean")
      return matcher;
    if (dateLib.isDate(matcher)) {
      return rangeIncludesDate(range, matcher, false, dateLib);
    }
    if (isDatesArray(matcher, dateLib)) {
      return matcher.some((date) => rangeIncludesDate(range, date, false, dateLib));
    }
    if (isDateRange(matcher)) {
      if (matcher.from && matcher.to) {
        return rangeOverlaps(range, { from: matcher.from, to: matcher.to }, dateLib);
      }
      return false;
    }
    if (isDayOfWeekType(matcher)) {
      return rangeContainsDayOfWeek(range, matcher.dayOfWeek, dateLib);
    }
    if (isDateInterval(matcher)) {
      const isClosedInterval = dateLib.isAfter(matcher.before, matcher.after);
      if (isClosedInterval) {
        return rangeOverlaps(range, {
          from: dateLib.addDays(matcher.after, 1),
          to: dateLib.addDays(matcher.before, -1)
        }, dateLib);
      }
      return dateMatchModifiers(range.from, matcher, dateLib) || dateMatchModifiers(range.to, matcher, dateLib);
    }
    if (isDateAfterType(matcher) || isDateBeforeType(matcher)) {
      return dateMatchModifiers(range.from, matcher, dateLib) || dateMatchModifiers(range.to, matcher, dateLib);
    }
    return false;
  });
  if (nonFunctionMatchersResult) {
    return true;
  }
  const functionMatchers = matchers.filter((matcher) => typeof matcher === "function");
  if (functionMatchers.length) {
    let date = range.from;
    const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
    for (let i = 0; i <= totalDays; i++) {
      if (functionMatchers.some((matcher) => matcher(date))) {
        return true;
      }
      date = dateLib.addDays(date, 1);
    }
  }
  return false;
}

// node_modules/react-day-picker/dist/esm/selection/useRange.js
function useRange(props, dateLib) {
  const { disabled, excludeDisabled, selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const isSelected = (date) => selected && rangeIncludesDate(selected, date, false, dateLib);
  const select = (triggerDate, modifiers, e) => {
    const { min: min2, max: max2 } = props;
    const newRange = triggerDate ? addToRange(triggerDate, selected, min2, max2, required, dateLib) : void 0;
    if (excludeDisabled && disabled && (newRange == null ? void 0 : newRange.from) && newRange.to) {
      if (rangeContainsModifiers({ from: newRange.from, to: newRange.to }, disabled, dateLib)) {
        newRange.from = triggerDate;
        newRange.to = void 0;
      }
    }
    if (!onSelect) {
      setSelected(newRange);
    }
    onSelect == null ? void 0 : onSelect(newRange, triggerDate, modifiers, e);
    return newRange;
  };
  return {
    selected,
    select,
    isSelected
  };
}

// node_modules/react-day-picker/dist/esm/selection/useSingle.js
function useSingle(props, dateLib) {
  const { selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const { isSameDay: isSameDay2 } = dateLib;
  const isSelected = (compareDate) => {
    return selected ? isSameDay2(selected, compareDate) : false;
  };
  const select = (triggerDate, modifiers, e) => {
    let newDate = triggerDate;
    if (!required && selected && selected && isSameDay2(triggerDate, selected)) {
      newDate = void 0;
    }
    if (!onSelect) {
      setSelected(newDate);
    }
    if (required) {
      onSelect == null ? void 0 : onSelect(newDate, triggerDate, modifiers, e);
    } else {
      onSelect == null ? void 0 : onSelect(newDate, triggerDate, modifiers, e);
    }
    return newDate;
  };
  return {
    selected,
    select,
    isSelected
  };
}

// node_modules/react-day-picker/dist/esm/useSelection.js
function useSelection(props, dateLib) {
  const single = useSingle(props, dateLib);
  const multi = useMulti(props, dateLib);
  const range = useRange(props, dateLib);
  switch (props.mode) {
    case "single":
      return single;
    case "multiple":
      return multi;
    case "range":
      return range;
    default:
      return void 0;
  }
}

// node_modules/react-day-picker/dist/esm/DayPicker.js
function DayPicker(props) {
  var _a;
  const { components, formatters: formatters2, labels, dateLib, locale, classNames } = useMemo(() => {
    const locale2 = __spreadValues(__spreadValues({}, enUS), props.locale);
    const dateLib2 = new DateLib({
      locale: locale2,
      weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
      firstWeekContainsDate: props.firstWeekContainsDate,
      useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
      timeZone: props.timeZone,
      numerals: props.numerals
    }, props.dateLib);
    return {
      dateLib: dateLib2,
      components: getComponents(props.components),
      formatters: getFormatters(props.formatters),
      labels: __spreadValues(__spreadValues({}, labels_exports), props.labels),
      locale: locale2,
      classNames: __spreadValues(__spreadValues({}, getDefaultClassNames()), props.classNames)
    };
  }, [
    props.locale,
    props.broadcastCalendar,
    props.weekStartsOn,
    props.firstWeekContainsDate,
    props.useAdditionalWeekYearTokens,
    props.useAdditionalDayOfYearTokens,
    props.timeZone,
    props.numerals,
    props.dateLib,
    props.components,
    props.formatters,
    props.labels,
    props.classNames
  ]);
  const { captionLayout, mode, onDayBlur, onDayClick, onDayFocus, onDayKeyDown, onDayMouseEnter, onDayMouseLeave, onNextClick, onPrevClick, showWeekNumber, styles } = props;
  const { formatCaption: formatCaption2, formatDay: formatDay2, formatMonthDropdown: formatMonthDropdown2, formatWeekNumber: formatWeekNumber2, formatWeekNumberHeader: formatWeekNumberHeader2, formatWeekdayName: formatWeekdayName2, formatYearDropdown: formatYearDropdown2 } = formatters2;
  const calendar = useCalendar(props, dateLib);
  const { days, months, navStart, navEnd, previousMonth, nextMonth, goToMonth } = calendar;
  const getModifiers = useGetModifiers(days, props, dateLib);
  const { isSelected, select, selected: selectedValue } = (_a = useSelection(props, dateLib)) != null ? _a : {};
  const { blur, focused, isFocusTarget, moveFocus, setFocused } = useFocus(props, calendar, getModifiers, isSelected != null ? isSelected : () => false, dateLib);
  const { labelDayButton: labelDayButton2, labelGridcell: labelGridcell2, labelGrid: labelGrid2, labelMonthDropdown: labelMonthDropdown2, labelNav: labelNav2, labelWeekday: labelWeekday2, labelWeekNumber: labelWeekNumber2, labelWeekNumberHeader: labelWeekNumberHeader2, labelYearDropdown: labelYearDropdown2 } = labels;
  const weekdays = useMemo(() => getWeekdays(dateLib, props.ISOWeek), [dateLib, props.ISOWeek]);
  const isInteractive = mode !== void 0 || onDayClick !== void 0;
  const handlePreviousClick = useCallback2(() => {
    if (!previousMonth)
      return;
    goToMonth(previousMonth);
    onPrevClick == null ? void 0 : onPrevClick(previousMonth);
  }, [previousMonth, goToMonth, onPrevClick]);
  const handleNextClick = useCallback2(() => {
    if (!nextMonth)
      return;
    goToMonth(nextMonth);
    onNextClick == null ? void 0 : onNextClick(nextMonth);
  }, [goToMonth, nextMonth, onNextClick]);
  const handleDayClick = useCallback2((day, m) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFocused(day);
    select == null ? void 0 : select(day.date, m, e);
    onDayClick == null ? void 0 : onDayClick(day.date, m, e);
  }, [select, onDayClick, setFocused]);
  const handleDayFocus = useCallback2((day, m) => (e) => {
    setFocused(day);
    onDayFocus == null ? void 0 : onDayFocus(day.date, m, e);
  }, [onDayFocus, setFocused]);
  const handleDayBlur = useCallback2((day, m) => (e) => {
    blur();
    onDayBlur == null ? void 0 : onDayBlur(day.date, m, e);
  }, [blur, onDayBlur]);
  const handleDayKeyDown = useCallback2((day, modifiers) => (e) => {
    const keyMap = {
      ArrowLeft: ["day", props.dir === "rtl" ? "after" : "before"],
      ArrowRight: ["day", props.dir === "rtl" ? "before" : "after"],
      ArrowDown: ["week", "after"],
      ArrowUp: ["week", "before"],
      PageUp: [e.shiftKey ? "year" : "month", "before"],
      PageDown: [e.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (keyMap[e.key]) {
      e.preventDefault();
      e.stopPropagation();
      const [moveBy, moveDir] = keyMap[e.key];
      moveFocus(moveBy, moveDir);
    }
    onDayKeyDown == null ? void 0 : onDayKeyDown(day.date, modifiers, e);
  }, [moveFocus, onDayKeyDown, props.dir]);
  const handleDayMouseEnter = useCallback2((day, modifiers) => (e) => {
    onDayMouseEnter == null ? void 0 : onDayMouseEnter(day.date, modifiers, e);
  }, [onDayMouseEnter]);
  const handleDayMouseLeave = useCallback2((day, modifiers) => (e) => {
    onDayMouseLeave == null ? void 0 : onDayMouseLeave(day.date, modifiers, e);
  }, [onDayMouseLeave]);
  const handleMonthChange = useCallback2((date) => (e) => {
    const selectedMonth = Number(e.target.value);
    const month = dateLib.setMonth(dateLib.startOfMonth(date), selectedMonth);
    goToMonth(month);
  }, [dateLib, goToMonth]);
  const handleYearChange = useCallback2((date) => (e) => {
    const selectedYear = Number(e.target.value);
    const month = dateLib.setYear(dateLib.startOfMonth(date), selectedYear);
    goToMonth(month);
  }, [dateLib, goToMonth]);
  const { className, style } = useMemo(() => ({
    className: [classNames[UI.Root], props.className].filter(Boolean).join(" "),
    style: __spreadValues(__spreadValues({}, styles == null ? void 0 : styles[UI.Root]), props.style)
  }), [classNames, props.className, props.style, styles]);
  const dataAttributes = getDataAttributes(props);
  const rootElRef = useRef2(null);
  useAnimation(rootElRef, Boolean(props.animate), {
    classNames,
    months,
    focused,
    dateLib
  });
  const contextValue = {
    dayPickerProps: props,
    selected: selectedValue,
    select,
    isSelected,
    months,
    nextMonth,
    previousMonth,
    goToMonth,
    getModifiers,
    components,
    classNames,
    styles,
    labels,
    formatters: formatters2
  };
  return React32.createElement(
    dayPickerContext.Provider,
    { value: contextValue },
    React32.createElement(
      components.Root,
      __spreadValues({ rootRef: props.animate ? rootElRef : void 0, className, style, dir: props.dir, id: props.id, lang: props.lang, nonce: props.nonce, title: props.title, role: props.role, "aria-label": props["aria-label"] }, dataAttributes),
      React32.createElement(
        components.Months,
        { className: classNames[UI.Months], style: styles == null ? void 0 : styles[UI.Months] },
        !props.hideNavigation && React32.createElement(components.Nav, { "data-animated-nav": props.animate ? "true" : void 0, className: classNames[UI.Nav], style: styles == null ? void 0 : styles[UI.Nav], "aria-label": labelNav2(), onPreviousClick: handlePreviousClick, onNextClick: handleNextClick, previousMonth, nextMonth }),
        months.map((calendarMonth, displayIndex) => {
          const dropdownMonths = getMonthOptions(calendarMonth.date, navStart, navEnd, formatters2, dateLib);
          const dropdownYears = getYearOptions(navStart, navEnd, formatters2, dateLib);
          return React32.createElement(
            components.Month,
            { "data-animated-month": props.animate ? "true" : void 0, className: classNames[UI.Month], style: styles == null ? void 0 : styles[UI.Month], key: displayIndex, displayIndex, calendarMonth },
            React32.createElement(components.MonthCaption, { "data-animated-caption": props.animate ? "true" : void 0, className: classNames[UI.MonthCaption], style: styles == null ? void 0 : styles[UI.MonthCaption], calendarMonth, displayIndex }, (captionLayout == null ? void 0 : captionLayout.startsWith("dropdown")) ? React32.createElement(
              components.DropdownNav,
              { className: classNames[UI.Dropdowns], style: styles == null ? void 0 : styles[UI.Dropdowns] },
              captionLayout === "dropdown" || captionLayout === "dropdown-months" ? React32.createElement(components.MonthsDropdown, { className: classNames[UI.MonthsDropdown], "aria-label": labelMonthDropdown2(), classNames, components, disabled: Boolean(props.disableNavigation), onChange: handleMonthChange(calendarMonth.date), options: dropdownMonths, style: styles == null ? void 0 : styles[UI.Dropdown], value: dateLib.getMonth(calendarMonth.date) }) : React32.createElement("span", null, formatMonthDropdown2(calendarMonth.date, dateLib)),
              captionLayout === "dropdown" || captionLayout === "dropdown-years" ? React32.createElement(components.YearsDropdown, { className: classNames[UI.YearsDropdown], "aria-label": labelYearDropdown2(dateLib.options), classNames, components, disabled: Boolean(props.disableNavigation), onChange: handleYearChange(calendarMonth.date), options: dropdownYears, style: styles == null ? void 0 : styles[UI.Dropdown], value: dateLib.getYear(calendarMonth.date) }) : React32.createElement("span", null, formatYearDropdown2(calendarMonth.date, dateLib)),
              React32.createElement("span", { role: "status", "aria-live": "polite", style: {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
                wordWrap: "normal"
              } }, formatCaption2(calendarMonth.date, dateLib.options, dateLib))
            ) : React32.createElement(components.CaptionLabel, { className: classNames[UI.CaptionLabel], role: "status", "aria-live": "polite" }, formatCaption2(calendarMonth.date, dateLib.options, dateLib))),
            React32.createElement(
              components.MonthGrid,
              { role: "grid", "aria-multiselectable": mode === "multiple" || mode === "range", "aria-label": labelGrid2(calendarMonth.date, dateLib.options, dateLib) || void 0, className: classNames[UI.MonthGrid], style: styles == null ? void 0 : styles[UI.MonthGrid] },
              !props.hideWeekdays && React32.createElement(
                components.Weekdays,
                { "data-animated-weekdays": props.animate ? "true" : void 0, className: classNames[UI.Weekdays], style: styles == null ? void 0 : styles[UI.Weekdays] },
                showWeekNumber && React32.createElement(components.WeekNumberHeader, { "aria-label": labelWeekNumberHeader2(dateLib.options), className: classNames[UI.WeekNumberHeader], style: styles == null ? void 0 : styles[UI.WeekNumberHeader], scope: "col" }, formatWeekNumberHeader2()),
                weekdays.map((weekday, i) => React32.createElement(components.Weekday, { "aria-label": labelWeekday2(weekday, dateLib.options, dateLib), className: classNames[UI.Weekday], key: i, style: styles == null ? void 0 : styles[UI.Weekday], scope: "col" }, formatWeekdayName2(weekday, dateLib.options, dateLib)))
              ),
              React32.createElement(components.Weeks, { "data-animated-weeks": props.animate ? "true" : void 0, className: classNames[UI.Weeks], style: styles == null ? void 0 : styles[UI.Weeks] }, calendarMonth.weeks.map((week, weekIndex) => {
                return React32.createElement(
                  components.Week,
                  { className: classNames[UI.Week], key: week.weekNumber, style: styles == null ? void 0 : styles[UI.Week], week },
                  showWeekNumber && React32.createElement(components.WeekNumber, { week, style: styles == null ? void 0 : styles[UI.WeekNumber], "aria-label": labelWeekNumber2(week.weekNumber, {
                    locale
                  }), className: classNames[UI.WeekNumber], scope: "row", role: "rowheader" }, formatWeekNumber2(week.weekNumber)),
                  week.days.map((day) => {
                    const { date } = day;
                    const modifiers = getModifiers(day);
                    modifiers[DayFlag.focused] = !modifiers.hidden && Boolean(focused == null ? void 0 : focused.isEqualTo(day));
                    modifiers[SelectionState.selected] = (isSelected == null ? void 0 : isSelected(date)) || modifiers.selected;
                    if (isDateRange(selectedValue)) {
                      const { from, to } = selectedValue;
                      modifiers[SelectionState.range_start] = Boolean(from && to && dateLib.isSameDay(date, from));
                      modifiers[SelectionState.range_end] = Boolean(from && to && dateLib.isSameDay(date, to));
                      modifiers[SelectionState.range_middle] = rangeIncludesDate(selectedValue, date, true, dateLib);
                    }
                    const style2 = getStyleForModifiers(modifiers, styles, props.modifiersStyles);
                    const className2 = getClassNamesForModifiers(modifiers, classNames, props.modifiersClassNames);
                    const ariaLabel = !isInteractive && !modifiers.hidden ? labelGridcell2(date, modifiers, dateLib.options, dateLib) : void 0;
                    return React32.createElement(components.Day, { key: `${dateLib.format(date, "yyyy-MM-dd")}_${dateLib.format(day.displayMonth, "yyyy-MM")}`, day, modifiers, className: className2.join(" "), style: style2, role: "gridcell", "aria-selected": modifiers.selected || void 0, "aria-label": ariaLabel, "data-day": dateLib.format(date, "yyyy-MM-dd"), "data-month": day.outside ? dateLib.format(date, "yyyy-MM") : void 0, "data-selected": modifiers.selected || void 0, "data-disabled": modifiers.disabled || void 0, "data-hidden": modifiers.hidden || void 0, "data-outside": day.outside || void 0, "data-focused": modifiers.focused || void 0, "data-today": modifiers.today || void 0 }, !modifiers.hidden && isInteractive ? React32.createElement(components.DayButton, { className: classNames[UI.DayButton], style: styles == null ? void 0 : styles[UI.DayButton], type: "button", day, modifiers, disabled: modifiers.disabled || void 0, tabIndex: isFocusTarget(day) ? 0 : -1, "aria-label": labelDayButton2(date, modifiers, dateLib.options, dateLib), onClick: handleDayClick(day, modifiers), onBlur: handleDayBlur(day, modifiers), onFocus: handleDayFocus(day, modifiers), onKeyDown: handleDayKeyDown(day, modifiers), onMouseEnter: handleDayMouseEnter(day, modifiers), onMouseLeave: handleDayMouseLeave(day, modifiers) }, formatDay2(date, dateLib.options, dateLib)) : !modifiers.hidden && formatDay2(day.date, dateLib.options, dateLib));
                  })
                );
              }))
            )
          );
        })
      ),
      props.footer && React32.createElement(components.Footer, { className: classNames[UI.Footer], style: styles == null ? void 0 : styles[UI.Footer], role: "status", "aria-live": "polite" }, props.footer)
    )
  );
}

// src/components/calendar.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
function Calendar(_a) {
  var _b = _a, {
    className,
    classNames,
    showOutsideDays = true
  } = _b, props = __objRest(_b, [
    "className",
    "classNames",
    "showOutsideDays"
  ]);
  return /* @__PURE__ */ jsx7(
    DayPicker,
    __spreadValues({
      showOutsideDays,
      className: cn("p-3", className),
      classNames: __spreadValues({
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible"
      }, classNames)
    }, props)
  );
}
Calendar.displayName = "Calendar";

// src/components/card.tsx
import * as React33 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var Card = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx8(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )
    }, props)
  );
});
Card.displayName = "Card";
var CardHeader = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx8(
    "div",
    __spreadValues({
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx8(
    "h3",
    __spreadValues({
      ref,
      className: cn("font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx8(
    "p",
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx8("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx8(
    "div",
    __spreadValues({
      ref,
      className: cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";

// src/components/carousel.tsx
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import useEmblaCarousel from "embla-carousel-react";
import * as React34 from "react";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var CarouselContext = React34.createContext(null);
function useCarousel() {
  const context = React34.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React34.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children
    } = _b, props = __objRest(_b, [
      "orientation",
      "opts",
      "setApi",
      "plugins",
      "className",
      "children"
    ]);
    const [carouselRef, api] = useEmblaCarousel(
      __spreadProps(__spreadValues({}, opts), {
        axis: orientation === "horizontal" ? "x" : "y"
      }),
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React34.useState(false);
    const [canScrollNext, setCanScrollNext] = React34.useState(false);
    const onSelect = React34.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React34.useCallback(() => {
      api == null ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React34.useCallback(() => {
      api == null ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React34.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React34.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React34.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api == null ? void 0 : api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx9(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx9(
          "div",
          __spreadProps(__spreadValues({
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel"
          }, props), {
            children
          })
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React34.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx9("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx9(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      )
    }, props)
  ) });
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React34.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx9(
    "div",
    __spreadValues({
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )
    }, props)
  );
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React34.forwardRef((_a, ref) => {
  var _b = _a, { className, variant = "outline", size = "icon" } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs4(
    Button,
    __spreadProps(__spreadValues({
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev
    }, props), {
      children: [
        /* @__PURE__ */ jsx9(ArrowLeftIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx9("span", { className: "sr-only", children: "Previous slide" })
      ]
    })
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React34.forwardRef((_a, ref) => {
  var _b = _a, { className, variant = "outline", size = "icon" } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs4(
    Button,
    __spreadProps(__spreadValues({
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext
    }, props), {
      children: [
        /* @__PURE__ */ jsx9(ArrowRightIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx9("span", { className: "sr-only", children: "Next slide" })
      ]
    })
  );
});
CarouselNext.displayName = "CarouselNext";

// src/components/checkbox.tsx
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as React35 from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Checkbox = React35.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx10(
    CheckboxPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx10(
        CheckboxPrimitive.Indicator,
        {
          className: cn("flex items-center justify-center text-current"),
          children: /* @__PURE__ */ jsx10(CheckIcon, { className: "h-4 w-4" })
        }
      )
    })
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/collapsible.tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive.CollapsibleContent;

// src/components/command.tsx
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Command as CommandPrimitive } from "cmdk";
import * as React37 from "react";

// src/components/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as React36 from "react";
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React36.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx11(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React36.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs5(DialogPortal, { children: [
    /* @__PURE__ */ jsx11(DialogOverlay, {}),
    /* @__PURE__ */ jsxs5(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxs5(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ jsx11(Cross2Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx11("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx11(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )
    }, props)
  );
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx11(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React36.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx11(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React36.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx11(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/command.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var Command = React37.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx12(
    CommandPrimitive,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      )
    }, props)
  );
});
Command.displayName = CommandPrimitive.displayName;
var CommandDialog = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx12(Dialog, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx12(DialogContent, { className: "overflow-hidden p-0", children: /* @__PURE__ */ jsx12(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) }));
};
var CommandInput = React37.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxs6("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
    /* @__PURE__ */ jsx12(MagnifyingGlassIcon, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ jsx12(
      CommandPrimitive.Input,
      __spreadValues({
        ref,
        className: cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )
      }, props)
    )
  ] });
});
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandList = React37.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx12(
    CommandPrimitive.List,
    __spreadValues({
      ref,
      className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)
    }, props)
  );
});
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = React37.forwardRef((props, ref) => /* @__PURE__ */ jsx12(
  CommandPrimitive.Empty,
  __spreadValues({
    ref,
    className: "py-6 text-center text-sm"
  }, props)
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroup = React37.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx12(
    CommandPrimitive.Group,
    __spreadValues({
      ref,
      className: cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )
    }, props)
  );
});
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparator = React37.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx12(
    CommandPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 h-px bg-border", className)
    }, props)
  );
});
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItem = React37.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx12(
    CommandPrimitive.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props)
  );
});
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx12(
    "span",
    __spreadValues({
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )
    }, props)
  );
};
CommandShortcut.displayName = "CommandShortcut";

// src/components/context-menu.tsx
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import {
  CheckIcon as CheckIcon2,
  ChevronRightIcon as ChevronRightIcon2,
  DotFilledIcon
} from "@radix-ui/react-icons";
import * as React38 from "react";
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var ContextMenu = ContextMenuPrimitive.Root;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var ContextMenuGroup = ContextMenuPrimitive.Group;
var ContextMenuPortal = ContextMenuPrimitive.Portal;
var ContextMenuSub = ContextMenuPrimitive.Sub;
var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
var ContextMenuSubTrigger = React38.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxs7(
    ContextMenuPrimitive.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx13(ChevronRightIcon2, { className: "ml-auto h-4 w-4" })
      ]
    })
  );
});
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = React38.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx13(
    ContextMenuPrimitive.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var ContextMenuContent = React38.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx13(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx13(
    ContextMenuPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var ContextMenuItem = React38.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx13(
    ContextMenuPrimitive.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = React38.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxs7(
    ContextMenuPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsx13("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx13(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx13(CheckIcon2, { className: "h-4 w-4" }) }) }),
        children
      ]
    })
  );
});
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var ContextMenuRadioItem = React38.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs7(
    ContextMenuPrimitive.RadioItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx13("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx13(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx13(DotFilledIcon, { className: "h-4 w-4 fill-current" }) }) }),
        children
      ]
    })
  );
});
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var ContextMenuLabel = React38.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx13(
    ContextMenuPrimitive.Label,
    __spreadValues({
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold text-foreground",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = React38.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx13(
    ContextMenuPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-border", className)
    }, props)
  );
});
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
var ContextMenuShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx13(
    "span",
    __spreadValues({
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )
    }, props)
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

// src/components/drawer.tsx
import * as React39 from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var Drawer = (_a) => {
  var _b = _a, {
    shouldScaleBackground = true
  } = _b, props = __objRest(_b, [
    "shouldScaleBackground"
  ]);
  return /* @__PURE__ */ jsx14(
    DrawerPrimitive.Root,
    __spreadValues({
      shouldScaleBackground
    }, props)
  );
};
Drawer.displayName = "Drawer";
var DrawerTrigger = DrawerPrimitive.Trigger;
var DrawerPortal = DrawerPrimitive.Portal;
var DrawerClose = DrawerPrimitive.Close;
var DrawerOverlay = React39.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx14(
    DrawerPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn("fixed inset-0 z-50 bg-black/80", className)
    }, props)
  );
});
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
var DrawerContent = React39.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs8(DrawerPortal, { children: [
    /* @__PURE__ */ jsx14(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs8(
      DrawerPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsx14("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
          children
        ]
      })
    )
  ] });
});
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx14(
    "div",
    __spreadValues({
      className: cn("grid gap-1.5 p-4 text-center sm:text-left", className)
    }, props)
  );
};
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx14(
    "div",
    __spreadValues({
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
};
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React39.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx14(
    DrawerPrimitive.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
var DrawerDescription = React39.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx14(
    DrawerPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

// src/components/dropdown-menu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  CheckIcon as CheckIcon3,
  ChevronRightIcon as ChevronRightIcon3,
  DotFilledIcon as DotFilledIcon2
} from "@radix-ui/react-icons";
import * as React40 from "react";
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React40.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxs9(
    DropdownMenuPrimitive.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx15(ChevronRightIcon3, { className: "ml-auto h-4 w-4" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React40.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx15(
    DropdownMenuPrimitive.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React40.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsx15(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx15(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React40.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx15(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React40.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxs9(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsx15("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx15(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx15(CheckIcon3, { className: "h-4 w-4" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React40.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs9(
    DropdownMenuPrimitive.RadioItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx15("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx15(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx15(DotFilledIcon2, { className: "h-4 w-4 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React40.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx15(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React40.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx15(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx15(
    "span",
    __spreadValues({
      className: cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props)
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/Form/form.tsx
import {
  FormProvider
} from "react-hook-form";
import { jsx as jsx16 } from "react/jsx-runtime";
var Form = ({
  children,
  methods,
  onSubmit = () => {
  },
  onError,
  formProps = {}
}) => {
  return /* @__PURE__ */ jsx16(FormProvider, __spreadProps(__spreadValues({}, methods), { children: /* @__PURE__ */ jsx16("form", __spreadProps(__spreadValues({ onSubmit: methods.handleSubmit(onSubmit, onError) }, formProps), { children })) }));
};

// src/components/Form/form-field.tsx
import {
  Controller,
  useFormContext
} from "react-hook-form";
import React43 from "react";

// src/components/Label/label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva4 } from "class-variance-authority";
import * as React41 from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var labelVariants = cva4(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label3 = React41.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx17(
    LabelPrimitive.Root,
    __spreadValues({
      ref,
      className: cn(labelVariants(), className)
    }, props)
  );
});
Label3.displayName = LabelPrimitive.Root.displayName;

// src/components/Form/form-field.tsx
import { Slot as Slot3 } from "@radix-ui/react-slot";

// src/components/input.tsx
import * as React42 from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var Input = React42.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ jsx18(
      "input",
      __spreadValues({
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref
      }, props)
    );
  }
);
Input.displayName = "Input";

// src/components/Form/form-field.tsx
import { jsx as jsx19, jsxs as jsxs10 } from "react/jsx-runtime";
var FormFieldContext = React43.createContext(
  null
);
var FormField = (_a) => {
  var _b = _a, {
    name,
    control,
    label,
    placeholder,
    required,
    className = "px-4 py-6 shadow-inner drop-shadow-xl",
    labelClassName,
    messageClassName,
    requiredClassName,
    rules,
    shouldUnregister,
    defaultValue,
    onChange
  } = _b, inputProps = __objRest(_b, [
    "name",
    "control",
    "label",
    "placeholder",
    "required",
    "className",
    "labelClassName",
    "messageClassName",
    "requiredClassName",
    "rules",
    "shouldUnregister",
    "defaultValue",
    "onChange"
  ]);
  var _a2;
  const {
    formState: { errors }
  } = useFormContext();
  const fieldError = (_a2 = errors[name]) == null ? void 0 : _a2.message;
  return /* @__PURE__ */ jsx19(FormFieldContext.Provider, { value: { name }, children: /* @__PURE__ */ jsx19(
    Controller,
    {
      control,
      name,
      rules,
      shouldUnregister,
      defaultValue,
      render: ({ field }) => /* @__PURE__ */ jsxs10(FormItem, { children: [
        label && /* @__PURE__ */ jsxs10(FormLabel, { className: labelClassName, children: [
          label,
          required && /* @__PURE__ */ jsx19("span", { className: cn("text-red-500", requiredClassName), children: "*" })
        ] }),
        /* @__PURE__ */ jsx19(FormControl, { children: /* @__PURE__ */ jsx19(
          Input,
          __spreadProps(__spreadValues(__spreadValues({}, field), inputProps), {
            onChange: (e) => {
              field.onChange(e);
              onChange == null ? void 0 : onChange(e.target.value);
            },
            placeholder,
            required,
            className
          })
        ) }),
        fieldError && /* @__PURE__ */ jsx19(FormMessage, { className: messageClassName, children: fieldError })
      ] })
    }
  ) });
};
var FormItemContext = React43.createContext(
  {}
);
var FormItem = React43.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const id = React43.useId();
  return /* @__PURE__ */ jsx19(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx19("div", __spreadValues({ ref, className: cn("space-y-2", className) }, props)) });
});
FormItem.displayName = "FormItem";
var FormLabel = React43.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx19(
    Label3,
    __spreadValues({
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId
    }, props)
  );
});
FormLabel.displayName = "FormLabel";
var useFormField = () => {
  const fieldContext = React43.useContext(FormFieldContext);
  const itemContext = React43.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  if (!fieldContext) {
    const { id: id2 } = itemContext;
    return {
      id: itemContext.id,
      formItemId: `${id2}-form-item`,
      formDescriptionId: `${id2}-form-item-description`,
      formMessageId: `${id2}-form-item-message`,
      error: null
    };
  }
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return __spreadValues({
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`
  }, fieldState);
};
var FormControl = React43.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx19(
    Slot3,
    __spreadValues({
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error
    }, props)
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React43.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx19(
    "p",
    __spreadValues({
      ref,
      id: formDescriptionId,
      className: cn("text-[0.8rem] text-muted-foreground", className)
    }, props)
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React43.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { error, formMessageId } = useFormField();
  const body = error ? String(error == null ? void 0 : error.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx19(
    "p",
    __spreadProps(__spreadValues({
      ref,
      id: formMessageId,
      className: cn("text-[0.8rem] font-medium text-destructive", className)
    }, props), {
      children: body
    })
  );
});
FormMessage.displayName = "FormMessage";

// src/components/hover-card.tsx
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as React44 from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = React44.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsx20(
    HoverCardPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

// src/components/icons.tsx
import * as icon from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoardIcon,
  Command as Command2,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image as Image2,
  Laptop,
  LayoutDashboardIcon,
  Loader2 as Loader22,
  LogIn,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  User,
  User2Icon,
  UserX2Icon,
  X
} from "lucide-react";
var IconsApp = __spreadValues({
  dashboard: LayoutDashboardIcon,
  logo: Command2,
  login: LogIn,
  close: X,
  profile: User2Icon,
  spinner: Loader22,
  kanban: CircuitBoardIcon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  employee: UserX2Icon,
  post: FileText,
  page: File,
  media: Image2,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  check: Check
}, icon);
var Icons = IconsApp;

// src/components/input-otp.tsx
import { DashIcon } from "@radix-ui/react-icons";
import { OTPInput, OTPInputContext } from "input-otp";
import * as React45 from "react";
import { jsx as jsx21, jsxs as jsxs11 } from "react/jsx-runtime";
var InputOTP = React45.forwardRef((_a, ref) => {
  var _b = _a, { className, containerClassName } = _b, props = __objRest(_b, ["className", "containerClassName"]);
  return /* @__PURE__ */ jsx21(
    OTPInput,
    __spreadValues({
      ref,
      containerClassName: cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className)
    }, props)
  );
});
InputOTP.displayName = "InputOTP";
var InputOTPGroup = React45.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx21("div", __spreadValues({ ref, className: cn("flex items-center", className) }, props));
});
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = React45.forwardRef((_a, ref) => {
  var _b = _a, { index, className } = _b, props = __objRest(_b, ["index", "className"]);
  const inputOTPContext = React45.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return /* @__PURE__ */ jsxs11(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className
      )
    }, props), {
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx21("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx21("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
      ]
    })
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = React45.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx21("div", __spreadProps(__spreadValues({ ref, role: "separator" }, props), { children: /* @__PURE__ */ jsx21(DashIcon, {}) }));
});
InputOTPSeparator.displayName = "InputOTPSeparator";

// src/components/menubar.tsx
import {
  CheckIcon as CheckIcon4,
  ChevronRightIcon as ChevronRightIcon4,
  DotFilledIcon as DotFilledIcon3
} from "@radix-ui/react-icons";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as React46 from "react";
import { jsx as jsx22, jsxs as jsxs12 } from "react/jsx-runtime";
var MenubarMenu = MenubarPrimitive.Menu;
var MenubarGroup = MenubarPrimitive.Group;
var MenubarPortal = MenubarPrimitive.Portal;
var MenubarSub = MenubarPrimitive.Sub;
var MenubarRadioGroup = MenubarPrimitive.RadioGroup;
var Menubar = React46.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx22(
    MenubarPrimitive.Root,
    __spreadValues({
      ref,
      className: cn(
        "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
        className
      )
    }, props)
  );
});
Menubar.displayName = MenubarPrimitive.Root.displayName;
var MenubarTrigger = React46.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx22(
    MenubarPrimitive.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      )
    }, props)
  );
});
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarSubTrigger = React46.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxs12(
    MenubarPrimitive.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx22(ChevronRightIcon4, { className: "ml-auto h-4 w-4" })
      ]
    })
  );
});
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = React46.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx22(
    MenubarPrimitive.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarContent = React46.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, align = "start", alignOffset = -4, sideOffset = 8 } = _b, props = __objRest(_b, ["className", "align", "alignOffset", "sideOffset"]);
    return /* @__PURE__ */ jsx22(MenubarPrimitive.Portal, { children: /* @__PURE__ */ jsx22(
      MenubarPrimitive.Content,
      __spreadValues({
        ref,
        align,
        alignOffset,
        sideOffset,
        className: cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )
      }, props)
    ) });
  }
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = React46.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx22(
    MenubarPrimitive.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = React46.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxs12(
    MenubarPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsx22("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx22(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx22(CheckIcon4, { className: "h-4 w-4" }) }) }),
        children
      ]
    })
  );
});
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = React46.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs12(
    MenubarPrimitive.RadioItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx22("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx22(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx22(DotFilledIcon3, { className: "h-4 w-4 fill-current" }) }) }),
        children
      ]
    })
  );
});
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = React46.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx22(
    MenubarPrimitive.Label,
    __spreadValues({
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = React46.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx22(
    MenubarPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
var MenubarShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx22(
    "span",
    __spreadValues({
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )
    }, props)
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

// src/components/modal.tsx
import { jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
var Modal = ({
  title,
  description,
  isOpen,
  onClose,
  children,
  className
}) => {
  const onChange = (open) => {
    if (!open) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsx23(Dialog, { open: isOpen, onOpenChange: onChange, children: /* @__PURE__ */ jsxs13(DialogContent, { className, children: [
    /* @__PURE__ */ jsxs13(DialogHeader, { children: [
      /* @__PURE__ */ jsx23(DialogTitle, { children: title }),
      /* @__PURE__ */ jsx23(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsx23("div", { children })
  ] }) });
};

// src/components/navigation-menu.tsx
import { ChevronDownIcon as ChevronDownIcon2 } from "@radix-ui/react-icons";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva as cva5 } from "class-variance-authority";
import * as React47 from "react";
import { jsx as jsx24, jsxs as jsxs14 } from "react/jsx-runtime";
var NavigationMenu = React47.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs14(
    NavigationMenuPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx24(NavigationMenuViewport, {})
      ]
    })
  );
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React47.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx24(
    NavigationMenuPrimitive.List,
    __spreadValues({
      ref,
      className: cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )
    }, props)
  );
});
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva5(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
var NavigationMenuTrigger = React47.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs14(
    NavigationMenuPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(navigationMenuTriggerStyle(), "group", className)
    }, props), {
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx24(
          ChevronDownIcon2,
          {
            className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    })
  );
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React47.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx24(
    NavigationMenuPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
        className
      )
    }, props)
  );
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React47.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx24("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx24(
    NavigationMenuPrimitive.Viewport,
    __spreadValues({
      className: cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      ),
      ref
    }, props)
  ) });
});
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React47.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx24(
    NavigationMenuPrimitive.Indicator,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx24("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
    })
  );
});
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// src/components/pagination.tsx
import {
  ChevronLeftIcon,
  ChevronRightIcon as ChevronRightIcon5,
  DotsHorizontalIcon as DotsHorizontalIcon2
} from "@radix-ui/react-icons";
import * as React48 from "react";
import { ChevronLeft as ChevronLeft2, ChevronRight as ChevronRight2 } from "lucide-react";
import { jsx as jsx25, jsxs as jsxs15 } from "react/jsx-runtime";
var Pagination = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx25(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
};
Pagination.displayName = "Pagination";
var PaginationContent = React48.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx25(
    "ul",
    __spreadValues({
      ref,
      className: cn("flex flex-row items-center gap-1", className)
    }, props)
  );
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React48.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx25("li", __spreadValues({ ref, className: cn("", className) }, props));
});
PaginationItem.displayName = "PaginationItem";
var PaginationLink = (_a) => {
  var _b = _a, {
    className,
    isActive,
    size = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "size"
  ]);
  return /* @__PURE__ */ jsx25(
    "a",
    __spreadValues({
      "aria-current": isActive ? "page" : void 0,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      )
    }, props)
  );
};
PaginationLink.displayName = "PaginationLink";
var PaginationPreviousLast = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs15(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 pl-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx25(ChevronLeft2, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx25("span", { className: "sr-only", children: "Previous Last" })
      ]
    })
  );
};
PaginationPreviousLast.displayName = "PaginationPreviousLast";
var PaginationPrevious = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs15(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 pl-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx25(ChevronLeftIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx25("span", { children: "Previous" })
      ]
    })
  );
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs15(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 pr-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx25("span", { children: "Next" }),
        /* @__PURE__ */ jsx25(ChevronRightIcon5, { className: "h-4 w-4" })
      ]
    })
  );
};
PaginationNext.displayName = "PaginationNext";
var PaginationNextLast = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs15(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 pr-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx25("span", { className: "sr-only", children: "Next Last" }),
        /* @__PURE__ */ jsx25(ChevronRight2, { className: "h-4 w-4" })
      ]
    })
  );
};
PaginationNextLast.displayName = "PaginationNextLast";
var PaginationEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs15(
    "span",
    __spreadProps(__spreadValues({
      "aria-hidden": true,
      className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx25(DotsHorizontalIcon2, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx25("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
};
PaginationEllipsis.displayName = "PaginationEllipsis";

// src/components/popover.tsx
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React49 from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverContent = React49.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsx26(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx26(
    PopoverPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/progress.tsx
import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React50 from "react";
import { jsx as jsx27 } from "react/jsx-runtime";
var Progress = React50.forwardRef((_a, ref) => {
  var _b = _a, { className, value } = _b, props = __objRest(_b, ["className", "value"]);
  return /* @__PURE__ */ jsx27(
    ProgressPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx27(
        ProgressPrimitive.Indicator,
        {
          className: "h-full w-full flex-1 bg-primary transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    })
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

// src/components/radio-group.tsx
import { CheckIcon as CheckIcon5 } from "@radix-ui/react-icons";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React51 from "react";
import { jsx as jsx28 } from "react/jsx-runtime";
var RadioGroup4 = React51.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx28(
    RadioGroupPrimitive.Root,
    __spreadProps(__spreadValues({
      className: cn("grid gap-2", className)
    }, props), {
      ref
    })
  );
});
RadioGroup4.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React51.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx28(
    RadioGroupPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx28(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx28(CheckIcon5, { className: "h-3.5 w-3.5 fill-primary" }) })
    })
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/resizable.tsx
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import * as ResizablePrimitive from "react-resizable-panels";
import { jsx as jsx29 } from "react/jsx-runtime";
var ResizablePanelGroup = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx29(
    ResizablePrimitive.PanelGroup,
    __spreadValues({
      className: cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )
    }, props)
  );
};
var ResizablePanel = ResizablePrimitive.Panel;
var ResizableHandle = (_a) => {
  var _b = _a, {
    withHandle,
    className
  } = _b, props = __objRest(_b, [
    "withHandle",
    "className"
  ]);
  return /* @__PURE__ */ jsx29(
    ResizablePrimitive.PanelResizeHandle,
    __spreadProps(__spreadValues({
      className: cn(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )
    }, props), {
      children: withHandle && /* @__PURE__ */ jsx29("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsx29(DragHandleDots2Icon, { className: "h-2.5 w-2.5" }) })
    })
  );
};

// src/components/scroll-area.tsx
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React52 from "react";
import { jsx as jsx30, jsxs as jsxs16 } from "react/jsx-runtime";
var ScrollArea = React52.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs16(
    ScrollAreaPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn("relative overflow-hidden", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx30(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
        /* @__PURE__ */ jsx30(ScrollBar, {}),
        /* @__PURE__ */ jsx30(ScrollAreaPrimitive.Corner, {})
      ]
    })
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React52.forwardRef((_a, ref) => {
  var _b = _a, { className, orientation = "vertical" } = _b, props = __objRest(_b, ["className", "orientation"]);
  return /* @__PURE__ */ jsx30(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    __spreadProps(__spreadValues({
      ref,
      orientation,
      className: cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx30(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
    })
  );
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/search-input.tsx
import React53, { useCallback as useCallback4 } from "react";
import { useDebounce } from "use-debounce";
import { jsx as jsx31 } from "react/jsx-runtime";
function SearchInput({
  value,
  placeholder,
  className,
  debounceTime = 750,
  onSearch
}) {
  const [searchTerm, setSearchTerm] = React53.useState(value);
  const [debouncedValue] = useDebounce(searchTerm, debounceTime);
  const handleSettingSearchParams = useCallback4((newSearchValue) => {
    if (newSearchValue === "" || newSearchValue === void 0 || !newSearchValue) {
      onSearch(newSearchValue);
      return;
    }
  }, []);
  React53.useEffect(() => {
    handleSettingSearchParams(debouncedValue);
  }, [debouncedValue, handleSettingSearchParams]);
  React53.useEffect(() => {
    setSearchTerm(value);
  }, [value]);
  return /* @__PURE__ */ jsx31(
    Input,
    {
      placeholder: placeholder || `Search...`,
      value: searchTerm,
      onChange: (event) => setSearchTerm(event.target.value),
      className: cn("w-full md:max-w-sm", className)
    }
  );
}

// src/components/select.tsx
import {
  CaretSortIcon,
  CheckIcon as CheckIcon6,
  ChevronDownIcon as ChevronDownIcon3,
  ChevronUpIcon
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as React54 from "react";
import { jsx as jsx32, jsxs as jsxs17 } from "react/jsx-runtime";
var Select2 = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React54.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs17(
    SelectPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx32(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx32(CaretSortIcon, { className: "h-4 w-4 opacity-50" }) })
      ]
    })
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React54.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx32(
    SelectPrimitive.ScrollUpButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx32(ChevronUpIcon, {})
    })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React54.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx32(
    SelectPrimitive.ScrollDownButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx32(ChevronDownIcon3, {})
    })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React54.forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = __objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ jsx32(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs17(
    SelectPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ jsx32(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx32(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx32(SelectScrollDownButton, {})
      ]
    })
  ) });
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React54.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx32(
    SelectPrimitive.Label,
    __spreadValues({
      ref,
      className: cn("px-2 py-1.5 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React54.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs17(
    SelectPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx32("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx32(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx32(CheckIcon6, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ jsx32(SelectPrimitive.ItemText, { children })
      ]
    })
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React54.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx32(
    SelectPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/separator.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React55 from "react";
import { jsx as jsx33 } from "react/jsx-runtime";
var Separator5 = React55.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest(_b, ["className", "orientation", "decorative"]);
    return /* @__PURE__ */ jsx33(
      SeparatorPrimitive.Root,
      __spreadValues({
        ref,
        decorative,
        orientation,
        className: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      }, props)
    );
  }
);
Separator5.displayName = SeparatorPrimitive.Root.displayName;

// src/components/sheet.tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon as Cross2Icon2 } from "@radix-ui/react-icons";
import { cva as cva6 } from "class-variance-authority";
import * as React56 from "react";
import { jsx as jsx34, jsxs as jsxs18 } from "react/jsx-runtime";
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetClose = SheetPrimitive.Close;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React56.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx34(
    SheetPrimitive.Overlay,
    __spreadProps(__spreadValues({
      className: cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props), {
      ref
    })
  );
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva6(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React56.forwardRef((_a, ref) => {
  var _b = _a, { side = "right", className, children } = _b, props = __objRest(_b, ["side", "className", "children"]);
  return /* @__PURE__ */ jsxs18(SheetPortal, { children: [
    /* @__PURE__ */ jsx34(SheetOverlay, {}),
    /* @__PURE__ */ jsxs18(
      SheetPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(sheetVariants({ side }), className)
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxs18(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ jsx34(Cross2Icon2, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx34("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx34(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )
    }, props)
  );
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx34(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React56.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx34(
    SheetPrimitive.Title,
    __spreadValues({
      ref,
      className: cn("text-lg font-semibold text-foreground", className)
    }, props)
  );
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React56.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx34(
    SheetPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// src/components/skeleton.tsx
import { jsx as jsx35 } from "react/jsx-runtime";
function Skeleton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx35(
    "div",
    __spreadValues({
      className: cn("animate-pulse rounded-md bg-primary/10", className)
    }, props)
  );
}

// src/components/slider.tsx
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React57 from "react";
import { jsx as jsx36, jsxs as jsxs19 } from "react/jsx-runtime";
var Slider = React57.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxs19(
    SliderPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx36(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ jsx36(SliderPrimitive.Range, { className: "absolute h-full bg-primary" }) }),
        /* @__PURE__ */ jsx36(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
      ]
    })
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

// src/components/sonner.tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { jsx as jsx37 } from "react/jsx-runtime";
var Toaster = (_a) => {
  var props = __objRest(_a, []);
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx37(
    Sonner,
    __spreadValues({
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      }
    }, props)
  );
};

// src/components/switch.tsx
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React58 from "react";
import { jsx as jsx38 } from "react/jsx-runtime";
var Switch = React58.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx38(
    SwitchPrimitives.Root,
    __spreadProps(__spreadValues({
      className: cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )
    }, props), {
      ref,
      children: /* @__PURE__ */ jsx38(
        SwitchPrimitives.Thumb,
        {
          className: cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    })
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/components/table.tsx
import * as React59 from "react";
import { jsx as jsx39 } from "react/jsx-runtime";
var Table = React59.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx39("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx39(
    "table",
    __spreadValues({
      ref,
      className: cn("w-full caption-bottom text-sm", className)
    }, props)
  ) });
});
Table.displayName = "Table";
var TableHeader = React59.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx39("thead", __spreadValues({ ref, className: cn("[&_tr]:border-b", className) }, props));
});
TableHeader.displayName = "TableHeader";
var TableBody = React59.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx39(
    "tbody",
    __spreadValues({
      ref,
      className: cn("[&_tr:last-child]:border-0", className)
    }, props)
  );
});
TableBody.displayName = "TableBody";
var TableFooter = React59.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx39(
    "tfoot",
    __spreadValues({
      ref,
      className: cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )
    }, props)
  );
});
TableFooter.displayName = "TableFooter";
var TableRow = React59.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx39(
    "tr",
    __spreadValues({
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )
    }, props)
  );
});
TableRow.displayName = "TableRow";
var TableHead = React59.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx39(
    "th",
    __spreadValues({
      ref,
      className: cn(
        "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
});
TableHead.displayName = "TableHead";
var TableCell = React59.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx39(
    "td",
    __spreadValues({
      ref,
      className: cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
});
TableCell.displayName = "TableCell";
var TableCaption = React59.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx39(
    "caption",
    __spreadValues({
      ref,
      className: cn("mt-4 text-sm text-muted-foreground", className)
    }, props)
  );
});
TableCaption.displayName = "TableCaption";

// src/components/tabs.tsx
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React60 from "react";
import { jsx as jsx40 } from "react/jsx-runtime";
var Tabs = TabsPrimitive.Root;
var TabsList = React60.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx40(
    TabsPrimitive.List,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        className
      )
    }, props)
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React60.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx40(
    TabsPrimitive.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        className
      )
    }, props)
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React60.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx40(
    TabsPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )
    }, props)
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/textarea.tsx
import * as React61 from "react";
import { jsx as jsx41 } from "react/jsx-runtime";
var Textarea = React61.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx41(
      "textarea",
      __spreadValues({
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref
      }, props)
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/toast.tsx
import { Cross2Icon as Cross2Icon3 } from "@radix-ui/react-icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva as cva7 } from "class-variance-authority";
import * as React62 from "react";
import { jsx as jsx42 } from "react/jsx-runtime";
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React62.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx42(
    ToastPrimitives.Viewport,
    __spreadValues({
      ref,
      className: cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )
    }, props)
  );
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva7(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React62.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsx42(
    ToastPrimitives.Root,
    __spreadValues({
      ref,
      className: cn(toastVariants({ variant }), className)
    }, props)
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React62.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx42(
    ToastPrimitives.Action,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )
    }, props)
  );
});
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React62.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx42(
    ToastPrimitives.Close,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      ),
      "toast-close": ""
    }, props), {
      children: /* @__PURE__ */ jsx42(Cross2Icon3, { className: "h-4 w-4" })
    })
  );
});
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React62.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx42(
    ToastPrimitives.Title,
    __spreadValues({
      ref,
      className: cn("text-sm font-semibold [&+div]:text-xs", className)
    }, props)
  );
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React62.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx42(
    ToastPrimitives.Description,
    __spreadValues({
      ref,
      className: cn("text-sm opacity-90", className)
    }, props)
  );
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// src/components/toggle.tsx
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva as cva8 } from "class-variance-authority";
import * as React63 from "react";
import { jsx as jsx43 } from "react/jsx-runtime";
var toggleVariants = cva8(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle = React63.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  return /* @__PURE__ */ jsx43(
    TogglePrimitive.Root,
    __spreadValues({
      ref,
      className: cn(toggleVariants({ variant, size, className }))
    }, props)
  );
});
Toggle.displayName = TogglePrimitive.Root.displayName;

// src/components/toggle-group.tsx
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as React64 from "react";
import { jsx as jsx44 } from "react/jsx-runtime";
var ToggleGroupContext = React64.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React64.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size, children } = _b, props = __objRest(_b, ["className", "variant", "size", "children"]);
  return /* @__PURE__ */ jsx44(
    ToggleGroupPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex items-center justify-center gap-1", className)
    }, props), {
      children: /* @__PURE__ */ jsx44(ToggleGroupContext.Provider, { value: { variant, size }, children })
    })
  );
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React64.forwardRef((_a, ref) => {
  var _b = _a, { className, children, variant, size } = _b, props = __objRest(_b, ["className", "children", "variant", "size"]);
  const context = React64.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx44(
    ToggleGroupPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      )
    }, props), {
      children
    })
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

// src/components/tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React65 from "react";
import { jsx as jsx45 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React65.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsx45(
    TooltipPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/use-toast.ts
import * as React66 from "react";
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return __spreadProps(__spreadValues({}, state), {
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      });
    case "UPDATE_TOAST":
      return __spreadProps(__spreadValues({}, state), {
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? __spreadValues(__spreadValues({}, t), action.toast) : t
        )
      });
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return __spreadProps(__spreadValues({}, state), {
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? __spreadProps(__spreadValues({}, t), {
            open: false
          }) : t
        )
      });
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return __spreadProps(__spreadValues({}, state), {
          toasts: []
        });
      }
      return __spreadProps(__spreadValues({}, state), {
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      });
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast(_a) {
  var props = __objRest(_a, []);
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: __spreadProps(__spreadValues({}, props2), { id })
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: __spreadProps(__spreadValues({}, props), {
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    })
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React66.useState(memoryState);
  React66.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return __spreadProps(__spreadValues({}, state), {
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  });
}

// src/shared/alert-modal.tsx
import { jsx as jsx46, jsxs as jsxs20 } from "react/jsx-runtime";
var AlertModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  title = "Are you sure?",
  description = "Are you sure you want to continue?",
  cancelText = "Cancel",
  confirmText = "Confirm",
  className,
  children
}) => {
  return /* @__PURE__ */ jsx46(
    Modal,
    {
      title,
      description,
      isOpen,
      onClose,
      className,
      children: children ? children : /* @__PURE__ */ jsxs20("div", { className: "flex w-full items-center justify-end space-x-2 pt-6", children: [
        /* @__PURE__ */ jsx46(Button, { disabled: loading, variant: "outline", onClick: onClose, children: cancelText }),
        /* @__PURE__ */ jsx46(Button, { disabled: loading, variant: "destructive", onClick: onConfirm, children: confirmText })
      ] })
    }
  );
};

// src/shared/breadcrumbs.tsx
import { Slash } from "lucide-react";
import { Fragment } from "react";
import { jsx as jsx47, jsxs as jsxs21 } from "react/jsx-runtime";
function Breadcrumbs({ items, className, classNameList }) {
  return /* @__PURE__ */ jsx47(Breadcrumb, { className, children: /* @__PURE__ */ jsx47(BreadcrumbList, { className: classNameList, children: items.map((item, index) => /* @__PURE__ */ jsxs21(Fragment, { children: [
    index !== items.length - 1 && /* @__PURE__ */ jsx47(BreadcrumbItem, { className: item.className, children: /* @__PURE__ */ jsx47(BreadcrumbLink, { href: item.link, children: item.title }) }),
    index < items.length - 1 && /* @__PURE__ */ jsx47(BreadcrumbSeparator, { children: /* @__PURE__ */ jsx47(Slash, {}) }),
    index === items.length - 1 && /* @__PURE__ */ jsx47(BreadcrumbPage, { children: item.title })
  ] }, item.title)) }) });
}

// src/shared/data-table.tsx
import React67, { useEffect as useEffect4 } from "react";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon
} from "@radix-ui/react-icons";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from "@tanstack/react-table";
import { ChevronLeftIcon as ChevronLeftIcon2, ChevronRightIcon as ChevronRightIcon6 } from "lucide-react";
import { Fragment as Fragment2, jsx as jsx48, jsxs as jsxs22 } from "react/jsx-runtime";
function DataTable({
  columns,
  data,
  pageCount,
  page = 1,
  perPage = 10,
  pageSizeOptions = [10, 20, 30, 40, 50],
  rowPerPageLabel = "Rows per page",
  ofLabel = "of",
  pageLabel = "Page",
  isRowsSelected = true,
  rowsSelectedLabel = "row(s) selected",
  className,
  emptyData,
  bodyClassName,
  cellClassName,
  headerClassName,
  rowClassName,
  tableClassName,
  onPageChange,
  onClick,
  onPageSizeChange
}) {
  const [pagination, setPagination] = React67.useState({
    pageIndex: Math.max(page - 1, 0),
    pageSize: perPage
  });
  const table = useReactTable({
    data,
    columns,
    pageCount,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { pagination },
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualFiltering: true
  });
  const onClickItem = (row) => {
    if (onClick) {
      onClick(row);
    }
  };
  useEffect4(() => {
    if (onPageChange) {
      onPageChange(pagination.pageIndex + 1);
    }
  }, [pagination]);
  return /* @__PURE__ */ jsxs22(Fragment2, { children: [
    /* @__PURE__ */ jsxs22(
      ScrollArea,
      {
        className: cn(
          "h-[calc(80vh-220px)] rounded-md border md:h-[calc(80dvh-80px)]",
          className
        ),
        children: [
          /* @__PURE__ */ jsxs22(Table, { className: cn("relative", tableClassName), children: [
            /* @__PURE__ */ jsx48(TableHeader, { className: headerClassName, children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx48(TableRow, { className: rowClassName, children: headerGroup.headers.map((header) => /* @__PURE__ */ jsx48(TableHead, { className: headerClassName, children: header.isPlaceholder ? null : flexRender(
              header.column.columnDef.header,
              header.getContext()
            ) }, header.id)) }, headerGroup.id)) }),
            /* @__PURE__ */ jsx48(TableBody, { className: bodyClassName, children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx48(
              TableRow,
              {
                "data-state": row.getIsSelected() ? "selected" : void 0,
                onClick: () => onClickItem(row.original),
                className: rowClassName,
                children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx48(TableCell, { className: cellClassName, children: flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                ) }, cell.id))
              },
              row.id
            )) : emptyData || /* @__PURE__ */ jsx48(TableRow, { children: /* @__PURE__ */ jsx48(
              TableCell,
              {
                colSpan: columns.length,
                className: "h-24 text-center",
                children: "No results."
              }
            ) }) })
          ] }),
          /* @__PURE__ */ jsx48(ScrollBar, { orientation: "horizontal" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs22("div", { className: "flex flex-col items-center justify-end gap-2 space-x-2 py-4 sm:flex-row", children: [
      /* @__PURE__ */ jsxs22("div", { className: "flex w-full items-center justify-between", children: [
        isRowsSelected ? /* @__PURE__ */ jsxs22("div", { className: "text-muted-foreground flex-1 text-sm", children: [
          table.getFilteredSelectedRowModel().rows.length,
          " ",
          ofLabel,
          " ",
          table.getFilteredRowModel().rows.length,
          " " + rowsSelectedLabel
        ] }) : null,
        /* @__PURE__ */ jsxs22("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx48("p", { className: "text-sm font-medium whitespace-nowrap", children: rowPerPageLabel }),
          /* @__PURE__ */ jsxs22(
            Select2,
            {
              value: `${pagination.pageSize}`,
              onValueChange: (value) => {
                const newSize = Number(value);
                setPagination(__spreadProps(__spreadValues({}, pagination), {
                  pageSize: newSize,
                  pageIndex: 0
                }));
                if (onPageSizeChange) onPageSizeChange(newSize);
              },
              children: [
                /* @__PURE__ */ jsx48(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ jsx48(SelectValue, { placeholder: pagination.pageSize }) }),
                /* @__PURE__ */ jsx48(SelectContent, { side: "top", children: pageSizeOptions.map((size) => /* @__PURE__ */ jsx48(SelectItem, { value: `${size}`, children: size }, size)) })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs22("div", { className: "flex w-full items-center justify-between gap-2 sm:justify-end", children: [
        /* @__PURE__ */ jsxs22("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
          pageLabel,
          " ",
          pagination.pageIndex + 1,
          " ",
          ofLabel,
          " ",
          pageCount
        ] }),
        /* @__PURE__ */ jsxs22("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx48(
            Button,
            {
              "aria-label": "Go to first page",
              variant: "outline",
              className: "hidden h-8 w-8 p-0 lg:flex",
              onClick: () => setPagination(__spreadProps(__spreadValues({}, pagination), { pageIndex: 0 })),
              disabled: pagination.pageIndex === 0,
              children: /* @__PURE__ */ jsx48(DoubleArrowLeftIcon, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx48(
            Button,
            {
              "aria-label": "Go to previous page",
              variant: "outline",
              className: "h-8 w-8 p-0",
              onClick: () => setPagination(__spreadProps(__spreadValues({}, pagination), {
                pageIndex: pagination.pageIndex - 1
              })),
              disabled: pagination.pageIndex === 0,
              children: /* @__PURE__ */ jsx48(ChevronLeftIcon2, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx48(
            Button,
            {
              "aria-label": "Go to next page",
              variant: "outline",
              className: "h-8 w-8 p-0",
              onClick: () => setPagination(__spreadProps(__spreadValues({}, pagination), {
                pageIndex: pagination.pageIndex + 1
              })),
              disabled: pagination.pageIndex + 1 >= pageCount,
              children: /* @__PURE__ */ jsx48(ChevronRightIcon6, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx48(
            Button,
            {
              "aria-label": "Go to last page",
              variant: "outline",
              className: "hidden h-8 w-8 p-0 lg:flex",
              onClick: () => setPagination(__spreadProps(__spreadValues({}, pagination), { pageIndex: pageCount - 1 })),
              disabled: pagination.pageIndex + 1 >= pageCount,
              children: /* @__PURE__ */ jsx48(DoubleArrowRightIcon, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}

// src/shared/data-table-skeleton.tsx
import { jsx as jsx49, jsxs as jsxs23 } from "react/jsx-runtime";
function DataTableSkeleton({
  columnCount,
  rowCount = 10,
  searchableColumnCount = 0,
  filterableColumnCount = 0,
  showViewOptions = true
}) {
  return /* @__PURE__ */ jsxs23("div", { className: "w-full space-y-3 overflow-auto", children: [
    /* @__PURE__ */ jsxs23("div", { className: "flex w-full items-center justify-between space-x-2 overflow-auto p-1", children: [
      /* @__PURE__ */ jsxs23("div", { className: "flex flex-1 items-center space-x-2 space-y-4", children: [
        searchableColumnCount > 0 ? Array.from({ length: searchableColumnCount }).map((_, i) => /* @__PURE__ */ jsx49(Skeleton, { className: "h-10 w-[150px] lg:w-[250px]" }, i)) : null,
        filterableColumnCount > 0 ? Array.from({ length: filterableColumnCount }).map((_, i) => /* @__PURE__ */ jsx49(Skeleton, { className: "h-10 w-[70px] border-dashed" }, i)) : null
      ] }),
      showViewOptions ? /* @__PURE__ */ jsx49(Skeleton, { className: "ml-auto hidden h-7 w-[70px] lg:flex" }) : null
    ] }),
    /* @__PURE__ */ jsx49("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxs23(Table, { children: [
      /* @__PURE__ */ jsx49(TableHeader, { children: Array.from({ length: 1 }).map((_, i) => /* @__PURE__ */ jsx49(TableRow, { className: "hover:bg-transparent", children: Array.from({ length: columnCount }).map((_2, i2) => /* @__PURE__ */ jsx49(TableHead, { children: /* @__PURE__ */ jsx49(Skeleton, { className: "h-6 w-full" }) }, i2)) }, i)) }),
      /* @__PURE__ */ jsx49(TableBody, { children: Array.from({ length: rowCount }).map((_, i) => /* @__PURE__ */ jsx49(TableRow, { className: "hover:bg-transparent", children: Array.from({ length: columnCount }).map((_2, i2) => /* @__PURE__ */ jsx49(TableCell, { children: /* @__PURE__ */ jsx49(Skeleton, { className: "h-6 w-full" }) }, i2)) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxs23("div", { className: "flex w-full flex-col items-center justify-between gap-4 overflow-auto px-2 py-1 sm:flex-row sm:gap-8", children: [
      /* @__PURE__ */ jsx49("div", { className: "flex-1", children: /* @__PURE__ */ jsx49(Skeleton, { className: "h-8 w-40" }) }),
      /* @__PURE__ */ jsxs23("div", { className: "flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8", children: [
        /* @__PURE__ */ jsxs23("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx49(Skeleton, { className: "h-8 w-24" }),
          /* @__PURE__ */ jsx49(Skeleton, { className: "h-8 w-[70px]" })
        ] }),
        /* @__PURE__ */ jsx49("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: /* @__PURE__ */ jsx49(Skeleton, { className: "h-8 w-20" }) }),
        /* @__PURE__ */ jsxs23("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx49(Skeleton, { className: "hidden size-8 lg:block" }),
          /* @__PURE__ */ jsx49(Skeleton, { className: "size-8" }),
          /* @__PURE__ */ jsx49(Skeleton, { className: "size-8" }),
          /* @__PURE__ */ jsx49(Skeleton, { className: "hidden size-8 lg:block" })
        ] })
      ] })
    ] })
  ] });
}

// src/shared/fileupload.tsx
import { AvatarIcon } from "@radix-ui/react-icons";
import { CameraIcon } from "lucide-react";
import { useEffect as useEffect5, useState as useState5 } from "react";
import { useDropzone } from "react-dropzone";
import { jsx as jsx50, jsxs as jsxs24 } from "react/jsx-runtime";
function FileUpload({
  onChange,
  value,
  label = "Add Image",
  className,
  classNameContent
}) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      console.log("files acceptedFiles=>", acceptedFiles);
      onUpdateFile(acceptedFiles);
    }
  });
  const onUpdateFile = (newFiles) => {
    onChange(newFiles);
  };
  return /* @__PURE__ */ jsx50("div", { className: cn("flex items-center justify-center", className), children: /* @__PURE__ */ jsx50(
    "div",
    {
      className: cn(
        "relative h-36 w-36 overflow-hidden rounded-full bg-gray-200 shadow-2xl ",
        classNameContent
      ),
      children: /* @__PURE__ */ jsxs24("div", __spreadProps(__spreadValues({}, getRootProps({ className: "dropzone cursor-pointer" })), { children: [
        /* @__PURE__ */ jsx50("input", __spreadValues({}, getInputProps())),
        value && !!value.length ? /* @__PURE__ */ jsx50(ImagePreview, { file: value[0] }) : /* @__PURE__ */ jsx50(AvatarIcon, { className: "h-36 w-36 text-gray-100" }),
        /* @__PURE__ */ jsxs24("p", { className: "absolute -bottom-5 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center bg-gray-300 bg-opacity-50 py-1 text-xs font-normal text-muted-foreground ", children: [
          /* @__PURE__ */ jsx50(CameraIcon, { className: "h-4 w-4 text-muted-foreground" }),
          label
        ] })
      ] }))
    }
  ) });
}
function ImagePreview({ file }) {
  const [objectUrl, setObjectUrl] = useState5(null);
  useEffect5(() => {
    const url = URL.createObjectURL(file);
    setObjectUrl(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);
  return objectUrl ? /* @__PURE__ */ jsx50(
    "img",
    {
      src: objectUrl,
      alt: "Preview",
      className: "absolute  h-full w-full rounded-full object-cover"
    }
  ) : null;
}

// src/shared/heading.tsx
import { jsx as jsx51, jsxs as jsxs25 } from "react/jsx-runtime";
function Heading({ title, description, className }) {
  return /* @__PURE__ */ jsxs25("div", { className, children: [
    /* @__PURE__ */ jsx51("h2", { className: "text-xl font-bold tracking-tight text-primary sm:text-3xl", children: title }),
    /* @__PURE__ */ jsx51("p", { className: "text-sm text-muted-foreground", children: description })
  ] });
}

// src/shared/page-head.tsx
import { Helmet } from "react-helmet-next";
import { jsx as jsx52, jsxs as jsxs26 } from "react/jsx-runtime";
function PageHead({ title = "shadcn-ui-react" }) {
  return /* @__PURE__ */ jsx52(Helmet, { children: /* @__PURE__ */ jsxs26("title", { children: [
    " ",
    title,
    " "
  ] }) });
}

// src/shared/pagination-section.tsx
import { jsx as jsx53, jsxs as jsxs27 } from "react/jsx-runtime";
function PaginationSection({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const maxPageNum = 2;
  const pageNumLimit = Math.floor(maxPageNum / 2);
  const activePages = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
  );
  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePrevPageLast = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  };
  const handleNextPageLast = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(pageNumbers.length);
    }
  };
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => /* @__PURE__ */ jsx53(
      PaginationItem,
      {
        className: currentPage === page ? "rounded-md bg-primary" : "",
        children: /* @__PURE__ */ jsx53(PaginationLink, { onClick: () => setCurrentPage(page), size: void 0, children: page })
      },
      idx
    ));
    if (activePages[0] > 1) {
      renderedPages.unshift(
        /* @__PURE__ */ jsx53(
          PaginationEllipsis,
          {
            onClick: () => setCurrentPage(activePages[0] - 1)
          },
          "ellipsis-start"
        )
      );
    }
    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        /* @__PURE__ */ jsx53(
          PaginationEllipsis,
          {
            onClick: () => setCurrentPage(activePages[activePages.length - 1] + 1)
          },
          "ellipsis-end"
        )
      );
    }
    return renderedPages;
  };
  return /* @__PURE__ */ jsx53("div", { className: "p-4", children: /* @__PURE__ */ jsx53(Pagination, { children: /* @__PURE__ */ jsxs27(PaginationContent, { children: [
    /* @__PURE__ */ jsxs27(PaginationItem, { children: [
      /* @__PURE__ */ jsx53(
        PaginationPreviousLast,
        {
          onClick: handlePrevPageLast,
          size: void 0
        }
      ),
      /* @__PURE__ */ jsx53(PaginationPrevious, { onClick: handlePrevPage, size: void 0 })
    ] }),
    renderPages(),
    /* @__PURE__ */ jsxs27(PaginationItem, { children: [
      /* @__PURE__ */ jsx53(PaginationNext, { onClick: handleNextPage, size: void 0 }),
      /* @__PURE__ */ jsx53(PaginationNextLast, { onClick: handleNextPageLast, size: void 0 })
    ] })
  ] }) }) });
}
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertModal,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumbs,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Checkbox,
  Collapsible,
  CollapsibleContent2 as CollapsibleContent,
  CollapsibleTrigger2 as CollapsibleTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  DataTable,
  DataTableSkeleton,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  FileUpload,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Heading,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Icons,
  ImagePreview,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label3 as Label,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Modal,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  PageHead,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationNextLast,
  PaginationPrevious,
  PaginationPreviousLast,
  PaginationSection,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup4 as RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  ScrollBar,
  SearchInput,
  Select2 as Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator5 as Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  cn,
  navigationMenuTriggerStyle,
  reducer,
  toast,
  toggleVariants,
  useFormField,
  useToast
};
