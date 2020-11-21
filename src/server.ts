import cheerio from 'cheerio';
import axiosScrapper from './services/axiosScrapper';

interface IPlayerData {
  rank: number;
  name: string;
  nationality: string;
  goals: number;
}

const url =
  'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';

const scrappingPremierLeague = async (): Promise<void> => {
  const response = await axiosScrapper.get(url);
  const html = response.data;
  const document = cheerio.load(html);

  const statsTable = document('.statsTableContainer > tr');
  const topScorers: IPlayerData[] = [];

  statsTable.each((index, stat): void => {
    const playerData: IPlayerData = {
      rank: Number(document(stat).find('.rank > strong').text()),
      name: document(stat).find('.playerName > strong').text(),
      nationality: document(stat).find('.playerCountry').text(),
      goals: Number(document(stat).find('.mainStat').text()),
    };

    topScorers.push(playerData);
  });
};

scrappingPremierLeague();
