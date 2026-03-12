declare module '*.jsx' {
  import type { ComponentType } from 'react';
  const component: ComponentType<any>;
  export default component;
}

declare module '*.js' {
  const value: any;
  export default value;
}

declare module '@/components/ui/toaster' {
  export const Toaster: React.ComponentType<any>;
}

declare module '@/lib/queryClient' {
  export const queryClientInstance: any;
}


declare module '@/lib/ContentContext' {
  export const ContentProvider: React.ComponentType<any>;
  export const useContent: () => any;
}

declare module '@/pages/Admin' {
  const Admin: React.ComponentType<any>;
  export default Admin;
}

declare module '@/components/UserNotRegisteredError' {
  const UserNotRegisteredError: React.ComponentType<any>;
  export default UserNotRegisteredError;
}

declare module './pages.config' {
  export const pagesConfig: any;
}

declare module './lib/PageNotFound' {
  const PageNotFound: React.ComponentType<any>;
  export default PageNotFound;
}
