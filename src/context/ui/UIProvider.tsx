import { useReducer } from 'react';
import { UIContext } from "./UIContext";
import { initialUIState } from './initialUIstate';
import { UIReducer } from './UIReducer';

interface IProps {
  children: React.ReactNode
}


export const UIProvider = (props: IProps) => {
  const { children } = props;
  const [state, dispatch] = useReducer(UIReducer, initialUIState);

  return (
    <UIContext.Provider value={{ sideMenuOpen: false }}>
      {children}
    </UIContext.Provider>
  );
};