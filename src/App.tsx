import { Toaster } from "@/components/ui/toaster"
import type { PropsWithChildren } from "react"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/queryClient'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { ContentProvider } from '@/lib/ContentContext';
import Admin from '@/pages/Admin';

const { Pages, Layout, mainPage } = pagesConfig as any;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : null;

type LayoutWrapperProps = PropsWithChildren<{
  currentPageName?: string
}>

const LayoutWrapper = ({ children, currentPageName }: LayoutWrapperProps) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={
        <LayoutWrapper currentPageName={mainPageKey}>
          {MainPage ? <MainPage /> : null}
        </LayoutWrapper>
      } />
      {Object.entries(Pages as Record<string, any>).map(([path, Page]) => (
        <Route
          key={path}
          path={`/${path}`}
          element={
            <LayoutWrapper currentPageName={path}>
              <Page />
            </LayoutWrapper>
          }
        />
      ))}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <ContentProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/*" element={<AuthenticatedApp />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </ContentProvider>
  )
}

export default App
