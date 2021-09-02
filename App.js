import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList 
        sections={[{
          title: "Grupo 1", 
          data: [
            { key: "1", name: "Nicolas" },
            { key: "2", name: "Maduro" },
            { key: "3", name: "Susy" },
            { key: "4", name: "Luis" },
            { key: "5", name: "Erme" },
          ]
        },
        {
          title: "Grupo 2", 
          data: [
            { key: "6", name: "Nicolas" },
            { key: "7", name: "Maduro" },
            { key: "8", name: "Susy" },
            { key: "9", name: "Luis" },
            { key: "10", name: "Erme" }
          ]
        },
        {
          title: "Grupo 3", 
          data: [
            { key: "11", name: "Nicolas" },
            { key: "12", name: "Maduro" },
            { key: "13", name: "Susy" },
            { key: "14", name: "Luis" },
            { key: "15", name: "Erme" },
          ]
        }
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  section: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#eee",
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
  }
});
