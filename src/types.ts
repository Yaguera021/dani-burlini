export interface NavItem {
  page: string;
  label: string;
}

export interface RecursoDataItem {
  id: number;
  iconType: 'font' | 'sound' | 'overlay' | 'preset' | 'transition' | string;
  title: string;
  description: string;
  downloadUrl: string;
}
