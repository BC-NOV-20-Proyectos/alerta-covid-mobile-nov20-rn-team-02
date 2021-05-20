import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import constans from '../utils/constans';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../utils/styles/IncidentReportStyles/IndicentResportStyles';
import {Card} from 'react-native-elements';

const RenderItem = ({
  area,
  institute,
  name,
  syntomatic,
  covidPositive,
  covidNegative,
}) => {
  return (
    <Card style={styles.cardStyle}>
      <Card.Title style={styles.cardTitle}>{area}</Card.Title>
      <View style={styles.view}>
        <Text style={styles.title}>{'Institute: '}</Text>
        <Text style={styles.value}>{institute}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.title}>{'Name: '}</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <Card.Divider />
      <Card.Title style={styles.cardTitleStatistics}>{'Reports'}</Card.Title>
      <View style={styles.view}>
        <Text style={styles.titleStatistics}>{'Symptomatycs: '}</Text>
        <Text style={styles.value}>{syntomatic + ' ' + 'Persons'}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.titleStatistics}>{'Covid Positive: '}</Text>
        <Text style={styles.value}>{covidPositive + ' ' + 'Persons'}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.titleStatistics}>{'Covid Negative: '}</Text>
        <Text style={styles.value}>{covidNegative + ' ' + 'Persons'}</Text>
      </View>
    </Card>
  );
};

const IncidentReport = () => {
  const [reportData, setReportData] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('userToken').then((res) => {
      axios({
        headers: {
          Authorization: 'Bearer ' + res,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'get',
        url: constans.urlReport,
      }).then((res) => {
        setReportData(res.data.data);
      });
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.titleReport}>{constans.reportTitle}</Text>
        <Text style={styles.subtitle}>{constans.incidentsReport}</Text>
      </View>
      <FlatList
        data={reportData}
        renderItem={(item) => (
          <RenderItem
            area={item.item.area}
            institute={item.item.institute}
            name={item.item.name}
            syntomatic={item.item.symptomatic}
            covidPositive={item.item.covid_positive}
            covidNegative={item.item.covid_negative}
          />
        )}
        keyExtractor={(item) => item.area + item.institute + item.name}
      />
    </View>
  );
};

export default IncidentReport;
