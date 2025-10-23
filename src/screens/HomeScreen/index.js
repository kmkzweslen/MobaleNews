import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, FlatList } from 'react-native';
import NewsItem from '../../components/NewsItem';
import SearchBar from '../../components/SearchBar';
import CategoryFilter from '../../components/CategoryFilter';
import DateFilter from '../../components/DateFilter';
import newsData from '../../data/news.json';
import Header from '../../components/Header';
import styles from './styles';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas');
  const [dateFilter, setDateFilter] = useState('Todas');
  const [filteredNews, setFilteredNews] = useState(newsData);

  useEffect(() => {
    let filtered = newsData;

    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryFilter !== 'Todas') {
      filtered = filtered.filter(item => item.category === categoryFilter);
    }

    if (dateFilter !== 'Todas') {
      const now = new Date();
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        if (dateFilter === 'Últimos 7 dias') {
          return (now - itemDate) / (1000 * 60 * 60 * 24) <= 7;
        }
        if (dateFilter === 'Últimos 30 dias') {
          return (now - itemDate) / (1000 * 60 * 60 * 24) <= 30;
        }
        return true;
      });
    }

    setFilteredNews(filtered);
  }, [searchQuery, categoryFilter, dateFilter]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fefefe' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fefefe" />
      <Header />
      <View style={styles.container}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <View style={styles.filters}>
          <CategoryFilter category={categoryFilter} onChangeCategory={setCategoryFilter} />
          <DateFilter date={dateFilter} onChangeDate={setDateFilter} />
        </View>

        <FlatList
          data={filteredNews}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <NewsItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
