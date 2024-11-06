import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import getEnvVars from './config';

const { SHOPIFY_STORE_URL, SHOPIFY_ACCESS_TOKEN } = getEnvVars();

const App = () => {
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${SHOPIFY_STORE_URL}/admin/api/2023-01/products.json`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
                },
            });
            const data = await response.json();
            console.log('Productos:', data);
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    };

    return (
        <View>
            <Text>Conectando con Shopify...</Text>
        </View>
    );
};

export default App;
