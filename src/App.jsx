
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import SimpleCart from './components/SimpleCart';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setActiveCategory, filterProductsByCategory } from './components/Store/actions';

const App = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
    dispatch(filterProductsByCategory(category));
  };

  return (
    <Container className="container">
      <Header handleCategoryClick={handleCategoryClick} />
      <SimpleCart />
      <Categories handleCategoryClick={handleCategoryClick} />
      <Products />
      <Footer />
    </Container>
  );
};

export default App;