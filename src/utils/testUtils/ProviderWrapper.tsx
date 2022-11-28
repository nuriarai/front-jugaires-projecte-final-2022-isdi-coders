import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import GlobalStyles from "../../styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default ProviderWrapper;
