const fromDuration = (duration) => {
  const regex = /P((([0-9]*\.?[0-9]*)Y)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)W)?(([0-9]*\.?[0-9]*)D)?)?(T(([0-9]*\.?[0-9]*)H)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)S)?)?/;
  const matches = duration.match(regex);
  return {
    years: parseFloat(matches[3]) ? parseFloat(matches[3]) : '',
    months: parseFloat(matches[5]) ? parseFloat(matches[5]) : '',
    weeks: parseFloat(matches[7]) ? parseFloat(matches[7]) : '',
    days: parseFloat(matches[9]) ? parseFloat(matches[9]) : '',
    hours: parseFloat(matches[12]) ? parseFloat(matches[12]) : '',
    minutes: parseFloat(matches[14]) ? parseFloat(matches[14]) : '',
    seconds: parseFloat(matches[16]) ? parseFloat(matches[16]) : '',
  };
};

const parseDuration = (duration) => {
  const {
    days, hours, minutes, months, seconds, weeks, years,
  } = fromDuration(duration);
  const d = days ? days > 1 ? `${days} days ` : `${days} day ` : '';
  const h = hours ? hours > 1 ? `${hours} hours ` : `${hours} hour ` : '';
  const mi = minutes ? minutes > 1 ? `${minutes} minutes ` : `${minutes} minute ` : '';
  const mo = months ? months > 1 ? `${months} months ` : `${months} month ` : '';
  const s = seconds ? seconds > 1 ? `${seconds} seconds ` : `${seconds} second ` : '';
  const w = weeks ? weeks > 1 ? `${weeks} weeks ` : `${weeks} week ` : '';
  const y = years ? years > 1 ? `${years} years ` : `${years} year ` : '';
  return y + mo + w + d + h + mi + s;
};

export default parseDuration;
