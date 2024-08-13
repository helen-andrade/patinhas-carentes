import { mySQL } from "./mySQL";
import { Ongs } from "./entities/Ongs";
import { Animals } from "./entities/Animals";

const ONGS = [
  {
    "name": "Patinhas do Bem",
    "email": "patinhasdobem@example.com",
    "description": "Protegendo e resgatando animais em situação de risco com amor e dedicação.",
    "whatsapp": "+5511998765432",
    "city": "São Paulo",
    "state": "SP",
    "cnpj": "12345678000195",
    "is_active": true,
    "logo_url": ""
  },
  {
    "name": "Amigos de Pata",
    "email": "amigosdepata@example.com",
    "description": "Promovemos adoção e cuidados para cães e gatos em situação de abandono.",
    "whatsapp": "+5511987654321",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "cnpj": "23456789000123",
    "is_active": true,
    "logo_url": ""
  },
  {
    "name": "Refúgio Animal",
    "email": "refugioanimal@example.com",
    "description": "Oferecemos abrigo e cuidados para animais resgatados, buscando um lar para cada um.",
    "whatsapp": "+5511976543210",
    "city": "Barreiras",
    "state": "BA",
    "cnpj": "34567890000134",
    "is_active": true,
    "logo_url": ""
  },
  {
    "name": "Coração de Bicho",
    "email": "coracaodebicho@example.com",
    "description": "Apoiamos a saúde e o bem-estar de animais com campanhas de adoção e conscientização.",
    "whatsapp": "+5511965432109",
    "city": "Belo Horizonte",
    "state": "MG",
    "cnpj": "45678901000145",
    "is_active": true,
    "logo_url": ""
  },
  {
    "name": "Salve os Peludos",
    "email": "salveospeludos@example.com",
    "description": "Trabalhamos para resgatar e encontrar lares para animais vítimas de maus-tratos.",
    "whatsapp": "+5511954321098",
    "city": "Salvador",
    "state": "BA",
    "cnpj": "56789010000156",
    "is_active": true,
    "logo_url": ""
  },
  {
    "name": "Vida Animal",
    "email": "vidaanimal@example.com",
    "description": "Ajudamos animais em necessidade com programas de adoção, castração e cuidados.",
    "whatsapp": "+5511943210987",
    "city": "Fortaleza",
    "state": "CE",
    "cnpj": "67890120000167",
    "is_active": true,
    "logo_url": ""
  },
  {
    "name": "AcolhePets",
    "email": "acolhepets@example.com",
    "description": "Refúgio e amor para animais abandonados, promovendo adoções responsáveis e cuidados.",
    "whatsapp": "+5511932109876",
    "city": "Recife",
    "state": "PE",
    "cnpj": "78901230000178",
    "is_active": true,
    "logo_url": ""
  },
  {
    "name": "Anjos de Pata",
    "email": "anjosdepata@example.com",
    "description": "Defendemos e cuidamos dos direitos dos animais, oferecendo abrigo e tratamentos.",
    "whatsapp": "+5511921098765",
    "city": "Porto Alegre",
    "state": "RS",
    "cnpj": "89012340000189",
    "is_active": true,
    "logo_url": ""
  },
  {
    "name": "Mundo dos Bichos",
    "email": "mundodosbichos@example.com",
    "description": "Trabalhamos pela proteção e saúde de animais, oferecendo apoio e adoção responsável.",
    "whatsapp": "+5511910987654",
    "city": "Curitiba",
    "state": "PR",
    "cnpj": "90123450000190",
    "is_active": true,
    "logo_url": ""
  },
  {
    "name": "Esperança Animal",
    "email": "esperancaanimal@example.com",
    "description": "Resgatamos, reabilitamos e promovemos a adoção de animais necessitados e negligenciados.",
    "whatsapp": "+5511909876543",
    "city": "Goiânia",
    "state": "GO",
    "cnpj": "01234560000101",
    "is_active": true,
    "logo_url": ""
  }
];

const ANIMALS = [
  {
    "name": "Max",
    "description": "Max é um cachorro amoroso e brincalhão, ótimo para famílias com crianças pequenas.",
    "image_url": "https://example.com/images/dog1.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Bella",
    "description": "Bella é uma cadela amigável e carinhosa, ideal para quem busca um amigo fiel.",
    "image_url": "https://example.com/images/dog2.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Luna",
    "description": "Luna é uma cachorrinha enérgica e adorável, que adora correr e brincar ao ar livre.",
    "image_url": "https://example.com/images/dog3.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Charlie",
    "description": "Charlie é um cachorro gentil e obediente, perfeito para companheiros de todas as idades.",
    "image_url": "https://example.com/images/dog4.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Lucy",
    "description": "Lucy é uma cachorrinha carinhosa e leal, que adora estar perto das pessoas e receber carinho.",
    "image_url": "https://example.com/images/dog5.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Rex",
    "description": "Rex é um cachorro forte e protetor, ideal para quem busca um guardião fiel.",
    "image_url": "https://example.com/images/dog6.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Daisy",
    "description": "Daisy é uma cadela doce e amorosa, que adora brincar e receber carinhos.",
    "image_url": "https://example.com/images/dog7.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Oscar",
    "description": "Oscar é um cachorro alegre e brincalhão, sempre pronto para uma nova aventura.",
    "image_url": "https://example.com/images/dog8.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Molly",
    "description": "Molly é uma cadela carinhosa e obediente, ideal para lares com crianças pequenas.",
    "image_url": "https://example.com/images/dog9.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Buddy",
    "description": "Buddy é um cachorro leal e companheiro, ótimo para quem busca um amigo fiel.",
    "image_url": "https://example.com/images/dog10.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Mia",
    "description": "Mia é uma gata independente e elegante, perfeita para quem aprecia uma companhia tranquila.",
    "image_url": "https://example.com/images/cat1.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Oliver",
    "description": "Oliver é um gato brincalhão e curioso, que adora explorar novos lugares e brincar com brinquedos.",
    "image_url": "https://example.com/images/cat2.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Simba",
    "description": "Simba é um gato afetuoso e sociável, que adora estar na companhia de pessoas e receber carinho.",
    "image_url": "https://example.com/images/cat3.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Nala",
    "description": "Nala é uma gata adorável e tranquila, que se adapta bem a ambientes calmos e acolhedores.",
    "image_url": "https://example.com/images/cat4.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Toby",
    "description": "Toby é um gato energético e carinhoso, que gosta de brincar e interagir com seus humanos.",
    "image_url": "https://example.com/images/cat5.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Lily",
    "description": "Lily é uma gata tranquila e carinhosa, ideal para quem busca uma companhia serena.",
    "image_url": "https://example.com/images/cat6.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Cleo",
    "description": "Cleo é uma gata carinhosa e afetuosa, que adora se aninhar e receber carinho.",
    "image_url": "https://example.com/images/cat7.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Leo",
    "description": "Leo é um gato sociável e amigável, que gosta de interagir e brincar com outros animais.",
    "image_url": "https://example.com/images/cat8.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Chloe",
    "description": "Chloe é uma gata independente e curiosa, que adora explorar e se divertir.",
    "image_url": "https://example.com/images/cat9.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Sasha",
    "description": "Sasha é uma gata carinhosa e doce, perfeita para quem busca uma companhia amável.",
    "image_url": "https://example.com/images/cat10.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Rocky",
    "description": "Rocky é um cachorro ativo e brincalhão, sempre pronto para novas aventuras.",
    "image_url": "https://example.com/images/dog11.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Sophie",
    "description": "Sophie é uma cadela carinhosa e leal, ideal para quem procura uma amiga fiel.",
    "image_url": "https://example.com/images/dog12.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Bailey",
    "description": "Bailey é um cachorro amigável e brincalhão, ótimo para lares com crianças pequenas.",
    "image_url": "https://example.com/images/dog13.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Sadie",
    "description": "Sadie é uma cadela carinhosa e leal, que adora companhia e carinho dos seus humanos.",
    "image_url": "https://example.com/images/dog14.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Jake",
    "description": "Jake é um cachorro brincalhão e enérgico, sempre pronto para um jogo ou uma corrida.",
    "image_url": "https://example.com/images/dog15.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Zoey",
    "description": "Zoey é uma cadela doce e carinhosa, ideal para quem busca uma amiga leal e afetuosa.",
    "image_url": "https://example.com/images/dog16.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Bella",
    "description": "Bella é uma gata amorosa e tranquila, que se adapta bem a ambientes serenos e calmos.",
    "image_url": "https://example.com/images/cat11.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Misty",
    "description": "Misty é uma gata brincalhona e curiosa, que adora explorar e interagir com seus humanos.",
    "image_url": "https://example.com/images/cat12.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Maggie",
    "description": "Maggie é uma gata carinhosa e afetuosa, que gosta de estar perto das pessoas e receber carinho.",
    "image_url": "https://example.com/images/cat13.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Jack",
    "description": "Jack é um gato ativo e curioso, sempre pronto para explorar e brincar.",
    "image_url": "https://example.com/images/cat14.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Nina",
    "description": "Nina é uma gata doce e tranquila, ideal para quem busca uma companhia calma e serena.",
    "image_url": "https://example.com/images/cat15.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Teddy",
    "description": "Teddy é um cachorro amoroso e brincalhão, sempre pronto para fazer novos amigos.",
    "image_url": "https://example.com/images/dog17.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Riley",
    "description": "Riley é um cachorro ativo e amigável, que adora atividades ao ar livre e brincar com pessoas.",
    "image_url": "https://example.com/images/dog18.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Roxy",
    "description": "Roxy é uma cadela carinhosa e leal, que adora companhia e se entrosar com a família.",
    "image_url": "https://example.com/images/dog19.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Duke",
    "description": "Duke é um cachorro forte e protetor, ideal para quem busca um amigo fiel e confiável.",
    "image_url": "https://example.com/images/dog20.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "Lola",
    "description": "Lola é uma cadela doce e carinhosa, perfeita para lares com crianças e outros animais.",
    "image_url": "https://example.com/images/dog21.jpg",
    "is_available": true,
    "specie": "dog",
    "ong_id": 1
  },
  {
    "name": "George",
    "description": "George é um gato afetuoso e tranquilo, ideal para quem busca um companheiro calmo e sereno.",
    "image_url": "https://example.com/images/cat16.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Bella",
    "description": "Bella é uma gata independente e elegante, que se adapta bem a diferentes ambientes.",
    "image_url": "https://example.com/images/cat17.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  },
  {
    "name": "Rusty",
    "description": "Rusty é um gato brincalhão e enérgico, que adora interagir e se divertir com brinquedos.",
    "image_url": "https://example.com/images/cat18.jpg",
    "is_available": true,
    "specie": "cat",
    "ong_id": 1
  }
];

async function createOngs() {
  const ongsRepository = mySQL.getRepository(Ongs);
  const ongs = await ongsRepository.find();
  if (ongs.length > 0) return;

  console.log("Seeding Ongs");
  for (const ong of ONGS) {
    await ongsRepository.save(ong);
  }
}

async function createAnimals() {
  const animalsRepository = mySQL.getRepository(Animals);
  const animals = await animalsRepository.find();
  if (animals.length > 0) return;
  console.log("Seeding Animals");

  const ongsRepository = mySQL.getRepository(Ongs);
  const ongs = await ongsRepository.find();
  ongs.forEach(async (ong) => {
    for (const animal of ANIMALS) {
      await animalsRepository.save({
        ...animal,
        ong: { id: ong.id }
      });
    }
  })
}

export default async function runSeeds() {
  console.log("Running seeds...");
  await createOngs();
  await createAnimals();
  console.log("Seeds done");
}
