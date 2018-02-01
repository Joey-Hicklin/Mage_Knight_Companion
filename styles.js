import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
  	flex: 1
  },
  titleContainer: {
  	flex: 1,
    backgroundColor: '#fff',
  },
  titleImage: {
  	flex: 2,
  	width: undefined,
  	height: undefined,
  },
  titleButton: {
  	flex: 0,
  	borderRadius: 5,
  	padding: 5,
  	backgroundColor: '#f7c185'
  },
  buttonClusterTitle: {
  	flex: 1,
  	alignItems: 'center',
  	justifyContent: 'space-around'
  },
  buttonCluster: {
  	flex: 1,
  	alignItems: 'center',
  	justifyContent: 'space-around',
  	flexDirection: 'row'
  },
  characterSelectWrapper: {
  	flex: 1,
  	position: 'absolute',
  	width: '100%',
  	height: '100%',
  	top: 0,
  	left: 0
  },
  characterSelectButton: {
  	flex: 1,
  },
  characterSelect: {
  	flex: 1,
  	width: undefined,
  	height: undefined
  },
  characterSelectRow: {
  	flex: 1,
  	flexDirection: 'row'
  },
  goBack: {
  	flex: 0,
  	borderRadius: 5,
  	padding: 5,
  	backgroundColor: 'red'
  },
  continue: {
  	flex: 0,
  	borderRadius: 5,
  	padding: 5,
  	backgroundColor: 'green'
  },
  buttonText: {
  	fontSize: 25,
  },
  scenarioSelect: {
    position: 'absolute',
    top: '45%',
    left: '10%',
    backgroundColor: 'white',
    height: 50,
    width: '80%',
    opacity: 0.7,
  },
  trackerSmallRow: {
    flex:1
  },
  trackerBigBox: {
    flex: 4
  },
  trackerBigRow: {
    flexDirection: 'row',
    flex: 1,
  },
  trackerMapBox: {
    backgroundColor: 'green',
    flex: 1
  },
  trackerTradeBox: {
    backgroundColor: 'purple',
    flex: 1
  },
  trackerTokenBox: {
    backgroundColor: 'yellow',
    flex: 1
  },
  trackerFameBox: {
    backgroundColor: 'pink',
    flex: 1
  },
  turnTokenBox: {
    flexDirection: 'row',
    flex: 4,
    justifyContent: 'space-around'
  },
  turnTokenWaiting: {
    opacity: 1,
    width: 90,
    height: 70
  },
  turnTokenTake: {
    opacity: 1,
    width: 90,
    height: 70
  },
  turnTokenTook: {
    opacity: 0.25,
    width: 90,
    height: 70
  },
  hamburger: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 50,
    height: 50
  },
  optionsItem: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'green',
    borderColor: 'black',
  },
  optionsTitle: {
    fontSize: 30
  },
  fameBG: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  back: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 15,
    left: 15,
    width: 50,
    height: 50
  },
  repWrapper:{
    flex: 1
  },
  fameRepTextWrap:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fameRepName: {
    flex: 0.8,
    fontFamily: 'majalla',
    fontSize: 70,
    textAlign: 'center',
  },
  fameRepTop: {
    flex: 0.3,
  },
  fameRepBottom: {
    flex: 0.7,
  },
  rep: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  repSmall: {
    fontSize: 30
  },
  repLarge: {
    fontSize: 100
  },
  repText: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  repBottom:{
    flex: 0
  },
  levelWrapper:{
    flex: 1,
  },
  levelNum:{
    fontSize: 100,
    textAlign: 'center',
    flex: 3,
  },
  fameLevel:{
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },
  infoWrapper:{
    flex: 3
  },
  levelCountWrapper:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  levelCountText:{
    fontSize: 15,
    flex: 10,
    textAlign: 'right'
  },
  levelCountSpaceA:{
    flex: 7
  },
  levelCountSpaceB:{
    flex: 1
  },
  levelCountImage:{
    flex: 1,
  },
  overlayFameRep:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.25)'
  },
  turnBG:{
    position: 'absolute',
    flex: 1,
  },
  turnTitleText: {
    fontFamily: 'majalla',
    fontSize: 45,
    flex: 1,
  },
  turnSelectedBox:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  turnSelectedChar:{
    width: 70,
    margin: 5
  },
  turnCharBox:{
    flex: 5,
    
  },
  turnCharRow:{
    flex: 1,
    flexDirection: 'row',
    // flexDirection: 'row'
    
  },
  turnCharButton:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  turnCharImage:{
    flex: 1,
  },
  mapBox:{
    flex:1,
    borderWidth: 5,
    borderColor: 'red'
  }
  
});

 // turnBGWrapper:{
 //    flex: 1,
 //    position: 'absolute',
 //    width: '100%',
 //    height: '100%',
 //    flexDirection: 'row',
 //    backgroundColor: 'red'
 //  },
 //  turnTitleText: {
 //    fontFamily: 'majalla',
 //    fontSize: 45
 //  },
 //  turnBGL:{
 //    flex: 1,
 //  },
 //  turnBGNumBox:{
 //    flex: 1,
 //    borderColor: 'rgba(255,255,255,0.5)',
 //    borderWidth: 1,
 //    alignItems: 'center',
 //    justifyContent: 'center',
 //  },
 //  turnBGNum:{
 //    textAlign: 'center',
 //    fontSize: 70,
 //    fontFamily: 'majalla',
 //  },
 //  turnBGR:{
 //    flex: 4,
 //  },
 //  turnBGRToken: {
 //    alignItems: 'center',
 //  },
 //  turnBGSpace:{
 //    flex: 1,
 //    borderColor: 'rgba(255,255,255,0.5)',
 //    borderWidth: 1
 //  },
 //  turnTilesWrapper:{
 //    flex: 1,
 //    width: '100%',
 //    height: '100%',
 //    flexDirection: 'row',
 //  },
 //  turnChars: {
 //    width: 150,
 //    height: 110
 //  }
