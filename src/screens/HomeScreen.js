import { SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import HomeCarouselComponent from '../components/HomeCarouselComponent';
import HomeHeadingComponent from '../components/HomeHeadingComponent';
import ProductCardComponent from '../components/ProductCardComponent';
import LoadingErrorComponent from '../components/LoadingErrorComponent';
import fetchHomeProduct from '../hooks/fetchHomeProduct';

const HomeScreen = () => {
  const { isLoading, data, error } = fetchHomeProduct();

  // Función para renderizar cada producto
  const renderItem = ({ item }) => <ProductCardComponent item={item} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Componente que maneja el estado de carga y errores */}
      <LoadingErrorComponent isLoading={isLoading} error={error} />
      {!isLoading && !error && data && (
        <FlatList
          data={data} // Lista de datos
          renderItem={renderItem} // Renderiza cada producto
          keyExtractor={item => item.id} // Identificador único
          numColumns={2} // Número de columnas
          ListHeaderComponent={() => (
            <>
              <WelcomeComponent />
              <HomeCarouselComponent />
              <HomeHeadingComponent />
            </>
          )} // Encabezado de la lista
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
