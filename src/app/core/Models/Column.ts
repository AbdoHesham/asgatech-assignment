import { MenuItemCommandEvent } from "primeng/api";

export class Column {
    field: string;
    field2?: string;
    seperator?:string
    actionIcon?:string
    header: string;
    sortable?: boolean = true;
    type?: Columntype = Columntype.String;
    value?: any;
    width?: any;
    tooltip?:string;
    customTooltipFields?:string[];
    command?(event: MenuItemCommandEvent): void;

  }
  export enum Columntype {
    Number,
    Currency,
    String,
    StringList,
    date,
    time,
    list,
    daysOfWeek,
    statusNumber,
  Compine2Field,
    progress,
    YesNo,
    checkbox,
    booleanIcon,
    ActionMenu,
    ActionIcon,
    array1,
    array2,
    array3,
    dateTime,
    expanded,
    image,
    status,name,
    array4,
    translatString,
    statusNumberWithAction,
    isFamilyMember,
    address
  }
  