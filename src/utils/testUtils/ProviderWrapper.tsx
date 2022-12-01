import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import GlobalStyles from "../../styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import mockInitialStore from "../../mooks/mockInitialStore";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={mockInitialStore}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default ProviderWrapper;
