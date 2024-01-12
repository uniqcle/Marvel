import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

// Предохранители ловят далеко не все ошибки!
// Они ловят при запуске метода
// - render,
// - методы жизненного цикла
// - и в конструкторах дочерних компоентов

// не ловят
// - внутри обработчиков событий (т.к события происходят вне метода render)
// - ассинхронный код (т.к не понятно когда операция закончится)
// - в самом предохранители

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  //обновляет только состояния
  //   static getDerivedStateFromError(error) {
  //     return { error: true };
  //   }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
