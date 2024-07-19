import { renderChart } from './View.js';

async function loadDataset() {
  try {
    const response = await fetch('yelp_academic_dataset_business.json');
    const text = await response.text();
    const data = parseJSONLines(text);
    processDataset(data);
  } catch (error) {
    console.error('Error loading JSON file:', error);
  }
}

function parseJSONLines(text) {
  const lines = text.split('\n');
  const data = lines.map(line => {
    try {
      return JSON.parse(line);
    } catch (error) {
      console.error('Error parsing JSON line:', error);
      return null;
    }
  }).filter(item => item !== null);
  return data;
}

function processDataset(data) {
  // Extraer datos para gráficos
  const starRatings = data.map(business => business.stars);
  const reviewCounts = data.map(business => business.review_count);
  const isOpenCounts = data.map(business => business.is_open ? 'Open' : 'Closed');

  // Preparar datos para los gráficos
  const starRatingsChart = {
    labels: data.map(business => business.name),
    values: starRatings
  };

  const reviewCountsChart = {
    labels: data.map(business => business.name),
    values: reviewCounts
  };

  const isOpenCountsChart = {
    labels: ['Open', 'Closed'],
    values: [isOpenCounts.filter(status => status === 'Open').length, isOpenCounts.filter(status => status === 'Closed').length]
  };

  // Renderizar gráficos
  renderChart(starRatingsChart, 'starsChart', 'Star Ratings of Businesses');
  renderChart(reviewCountsChart, 'reviewCountsChart', 'Review Counts of Businesses');
  renderChart(isOpenCountsChart, 'isOpenCountsChart', 'Open vs Closed Businesses');
}

loadDataset();
