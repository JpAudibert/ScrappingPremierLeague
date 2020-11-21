import cheerio from 'cheerio';
import axiosScrapper from './services/axiosScrapper';

const url =
  'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';

const scrappingPremierLeague
  axiosScrapper.get(url);
