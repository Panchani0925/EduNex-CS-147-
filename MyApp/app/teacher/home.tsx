import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';



const App = () => {
  const screenWidth = Dimensions.get('window').width;
  
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        data: [0, 2, 8, 15, 5, 10, 15, 15.2],
        color: (opacity = 1) => `rgba(76, 110, 215, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(76, 110, 215, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#4c6ed7',
      fill: '#ffffff',
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, Samuel</Text>
            <Text style={styles.subGreeting}>What do you want to teach today?</Text>
          </View>
          <View style={styles.notificationIcon}>
            <View style={styles.notificationDot} />
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149852.png' }} 
              style={styles.searchIcon} 
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#888888"
            />
          </View>
        </View>

        {/* Lesson Progress */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Lesson Progress</Text>
          <View style={styles.lessonCards}>
            {/* Card 1 */}
            <View style={styles.lessonCard}>
              <View style={styles.cardImageContainer}>
                <View style={styles.cardImage}>
                  {/* Placeholder for the actual image */}
                </View>
              </View>
              <Text style={styles.cardSubject}>Mathematics</Text>
              <Text style={styles.cardTitle}>High School Algebra I: Help and Review</Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: '50%' }]} />
                </View>
                <Text style={styles.progressText}>5/10</Text>
              </View>
            </View>

            {/* Card 2 */}
            <View style={styles.lessonCard}>
              <View style={styles.cardImageContainer}>
                <View style={styles.cardImage}>
                  {/* Placeholder for the actual image */}
                </View>
              </View>
              <Text style={styles.cardSubject}>Mathematics</Text>
              <Text style={styles.cardTitle}>Enlargement to Trigonometry</Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: '71%' }]} />
                </View>
                <Text style={styles.progressText}>5/7</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Statistics */}
        <View style={styles.sectionContainer}>
          <View style={styles.statHeader}>
            <Text style={styles.sectionTitle}>Statistic</Text>
            <TouchableOpacity style={styles.periodSelector}>
              <Text style={styles.periodText}>Month</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsRow}>
              {/* Your Course */}
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Your Course</Text>
                <Text style={styles.statValue}>23</Text>
                <Text style={styles.statSubLabel}>Lesson</Text>
              </View>

              {/* Your Audience */}
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Your Audience</Text>
                <Text style={styles.statValue}>10,458</Text>
                <View style={styles.percentageContainer}>
                  <View style={[styles.percentageDot, styles.negativePercentage]} />
                  <Text style={[styles.percentageText, styles.negativePercentage]}>-23.47%</Text>
                </View>
              </View>
            </View>

            <View style={styles.statsRow}>
              {/* Avg. Watch Time */}
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Avg. Watch Time</Text>
                <Text style={styles.statValue}>35 min</Text>
                <View style={styles.percentageContainer}>
                  <View style={[styles.percentageDot, styles.positivePercentage]} />
                  <Text style={[styles.percentageText, styles.positivePercentage]}>+23.47%</Text>
                </View>
              </View>

              {/* Reviews */}
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Reviews</Text>
                <Text style={styles.statValue}>20,254</Text>
                <View style={styles.percentageContainer}>
                  <View style={[styles.percentageDot, styles.positivePercentage]} />
                  <Text style={[styles.percentageText, styles.positivePercentage]}>+23.47%</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Revenue */}
        <View style={styles.sectionContainer}>
          <View style={styles.statHeader}>
            <Text style={styles.sectionTitle}>Revenue</Text>
            <TouchableOpacity style={styles.periodSelector}>
              <Text style={styles.periodText}>2020</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.chartContainer}>
            <LineChart
              data={chartData}
              width={screenWidth - 40}
              height={220}
              chartConfig={chartConfig}
              bezier
              style={styles.chart}
              withVerticalLines={false}
              withHorizontalLines={true}
              withVerticalLabels={true}
              withHorizontalLabels={true}
              fromZero={true}
              yAxisSuffix="k"
              yAxisInterval={5}
              segments={4}
            />
            <View style={styles.currentValueBubble}>
              <Text style={styles.currentValueText}>$15.2k</Text>
            </View>
          </View>
        </View>

        {/* Latest News */}
        <View style={styles.sectionContainer}>
          <View style={styles.newsHeader}>
            <Text style={styles.sectionTitle}>Latest News</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* News Item 1 */}
          <View style={styles.newsItem}>
            <View style={styles.newsImageContainer}>
              <View style={styles.checkerboardImage} />
            </View>
            <View style={styles.newsContent}>
              <Text style={styles.newsCategory}>Biology</Text>
              <Text style={styles.newsTitle}>The Effects of Temperature on Enzyme Activity and Biology</Text>
              <View style={styles.newsFooter}>
                <View style={styles.timeContainer}>
                  <Image 
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2088/2088617.png' }} 
                    style={styles.timeIcon} 
                  />
                  <Text style={styles.timeText}>1 hour ago</Text>
                </View>
                <View style={styles.viewsContainer}>
                  <Image 
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/709/709612.png' }} 
                    style={styles.viewsIcon} 
                  />
                  <Text style={styles.viewsText}>4795</Text>
                </View>
              </View>
            </View>
          </View>

          {/* News Item 2 */}
          <View style={styles.newsItem}>
            <View style={styles.newsImageContainer}>
              <View style={styles.checkerboardImage} />
            </View>
            <View style={styles.newsContent}>
              <Text style={styles.newsCategory}>Mathematics</Text>
              <Text style={styles.newsTitle}>How to Work Out a Percentage Using a Calculator</Text>
              <View style={styles.newsFooter}>
                <View style={styles.timeContainer}>
                  <Image 
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2088/2088617.png' }} 
                    style={styles.timeIcon} 
                  />
                  <Text style={styles.timeText}>24 August 2020</Text>
                </View>
                <View style={styles.viewsContainer}>
                  <Image 
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/709/709612.png' }} 
                    style={styles.viewsIcon} 
                  />
                  <Text style={styles.viewsText}>4795</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Make a Class Button */}
      <View style={styles.makeClassButtonContainer}>
        <TouchableOpacity style={styles.makeClassButton}>
          <Text style={styles.makeClassButtonText}>Make a Class</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconActive}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png' }} 
              style={styles.navIcon} 
            />
          </View>
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconInactive}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2099/2099058.png' }} 
              style={styles.navIcon} 
            />
          </View>
          <Text style={styles.navTextInactive}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconInactive}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/456/456283.png' }} 
              style={styles.navIcon} 
            />
          </View>
          <Text style={styles.navTextInactive}></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181818',
  },
  subGreeting: {
    fontSize: 16,
    color: '#888888',
    marginTop: 4,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4c6ed7',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
  },
  searchIcon: {
    width: 16,
    height: 16,
    tintColor: '#888888',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#181818',
  },
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 15,
  },
  lessonCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lessonCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImageContainer: {
    height: 100,
    backgroundColor: '#4c6ed7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
  },
  cardSubject: {
    fontSize: 12,
    color: '#888888',
    marginTop: 10,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#181818',
    marginHorizontal: 10,
    marginTop: 4,
    marginBottom: 10,
    height: 40,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#f2f2f2',
    borderRadius: 2,
    marginRight: 8,
  },
  progressFill: {
    height: 4,
    backgroundColor: '#4c6ed7',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#888888',
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  periodSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  periodText: {
    fontSize: 14,
    color: '#181818',
    marginRight: 5,
  },
  dropdownIcon: {
    fontSize: 10,
    color: '#888888',
  },
  statsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statBox: {
    width: '48%',
  },
  statLabel: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 2,
  },
  statSubLabel: {
    fontSize: 12,
    color: '#888888',
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentageDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  percentageText: {
    fontSize: 12,
  },
  positivePercentage: {
    backgroundColor: '#36d66f',
    color: '#36d66f',
  },
  negativePercentage: {
    backgroundColor: '#ff0b0b',
    color: '#ff0b0b',
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 12,
  },
  currentValueBubble: {
    position: 'absolute',
    right: 40,
    top: 40,
    backgroundColor: '#4c6ed7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  currentValueText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  seeAllText: {
    fontSize: 14,
    color: '#4c6ed7',
  },
  newsItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  newsImageContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkerboardImage: {
    width: 60,
    height: 60,
    backgroundColor: '#000000',
  },
  newsContent: {
    flex: 1,
    padding: 10,
  },
  newsCategory: {
    fontSize: 12,
    color: '#888888',
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#181818',
    marginVertical: 5,
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeIcon: {
    width: 12,
    height: 12,
    tintColor: '#888888',
    marginRight: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#888888',
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsIcon: {
    width: 12,
    height: 12,
    tintColor: '#888888',
    marginRight: 4,
  },
  viewsText: {
    fontSize: 12,
    color: '#888888',
  },
  bottomSpacing: {
    height: 80,
  },
  makeClassButtonContainer: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  makeClassButton: {
    backgroundColor: '#4c6ed7',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '90%',
  },
  makeClassButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIconActive: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIconInactive: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#4c6ed7',
  },
  navTextActive: {
    fontSize: 12,
    color: '#4c6ed7',
    marginTop: 4,
  },
  navTextInactive: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },
});

export default App;