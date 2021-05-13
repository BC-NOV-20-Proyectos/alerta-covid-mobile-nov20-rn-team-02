import constans from './../constans';

const menuData = [
  {
    id: 1,
    navigationName: 'Locations',
    title: constans.locations,
    description: constans.locationsDescription,
    imageSource: require('../images/location.png'),
  },
  {
    id: 2,
    navigationName: 'ListTest',
    title: constans.registerLab,
    description: constans.registerLabDescription,
    imageSource: require('../images/laboratory.png'),
  },
  {
    id: 3,
    navigationName: 'IncidentReport',
    title: constans.incidentResportTitle,
    description: constans.incidentResportDescription,
    imageSource: require('../images/reports.svg'),
  },
  {
    id: 4,
    navigationName: 'Prevention',
    title: constans.prevention,
    description: constans.preventionDescription,
    imageSource: require('../images/vaccine.png'),
  },
];

export default menuData;
