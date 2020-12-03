import { LARGE_DATASET_URL, SMALL_DATASET_URL } from '../config';

export async function getData(wantsLargeDataset) {
  try {
    const res = await fetch(wantsLargeDataset ? LARGE_DATASET_URL : SMALL_DATASET_URL);

    const json = await res.json();

    if (res.ok) {
      return json;
    }
    throw new Error(json.message);
  } catch (err) {
    console.log(`Ошибка ${err}`);
    return err;
  }
}
