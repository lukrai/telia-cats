import { PrismaClient } from '@prisma/client';
import catItems from './cats-data.json';

const prisma = new PrismaClient();

async function main() {
  for (const item of catItems) {
    const catItem = {
      ...item,
      weight_imperial: item.weight.imperial,
      weight_metric: item.weight.imperial,
    };
    delete (catItem as unknown as any).weight;
    await prisma.cat.create({ data: catItem });
  }
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
