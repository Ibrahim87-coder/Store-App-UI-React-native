import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  greenContainer: {
    backgroundColor: colors.green,
    height: 150,
    borderBottomLeftRadius: 30,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:5
  },
  titleView: {
    position: 'absolute',
    margin: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  storeItem: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: 10,
    height: 120,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  divider: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 75,
    height: 1,
    marginVertical: 10,
  },
  featuredProducts: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 10,
  },
  featuredProductsContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    width: 130,
    height: 150,
  },
  dailyDeals: {
    alignItems: 'center',
    backgroundColor: colors.green,
    margin: 10,
    height: 130,
    width: 230,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchBarView: {
    backgroundColor: colors.white,
    position: 'absolute',
    borderRadius: 20,
    width: '75%',
    marginLeft: 20,
    position: 'absolute',
    top: 75,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black,
    marginVertical: 5,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  new: {
    position: 'absolute',
    right: 2,
    top: -15,
    color: colors.white,
    backgroundColor: '#cb2027',
    borderRadius: 10,
    padding: 5,
    fontWeight: 'bold',
  },
});
