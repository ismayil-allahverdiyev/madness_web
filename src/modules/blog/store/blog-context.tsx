import { createContext } from "react";
import BlogExampleImage from "../../../assets/images/blog_example_image.svg"
import DietExampleImage from "../../../assets/images/diet_example_image.svg"
import ConsistencyExampleImage from "../../../assets/images/consistency_example_image.svg"
import RestingExampleImage from "../../../assets/images/resting_example_image.svg"
import CarefullExampleImage from "../../../assets/images/carefull_example_image.svg"

interface BlogProps {
    posts: Post[];
}

export interface Post {
    title: string;
    image: string;
    date: string;
    time: string;
    body: string;
    category: string;
}

export const BlogContext = createContext({} as BlogProps)

export default function BlogContextProvider({ children }: any) {

    var posts = [
        {
            title: "Kas Büyümesi için Progressive Overload",
            image: BlogExampleImage,
            date: "05/02/2024",
            time: "10:36",
            body: "Egzersizlerinizin yoğunluğunu, hacmini veya karmaşıklığını zaman içinde kademeli olarak artırarak aşamalı aşırı yükleme ilkesini benimseyin. Bu sistematik yaklaşım kas büyümesini teşvik eder, gücü artırır ve antrenmandaki duraklamaları önler. Kaslarınızı sürekli olarak zorlamak ve adaptasyonu teşvik etmek için ağırlıkları artırmak, tekrarlar eklemek, dinlenme aralıklarını ayarlamak veya gelişmiş egzersiz çeşitlerini birleştirmek gibi teknikleri kullanın. ",
            category: "Fitness",
        },
        {
            title: "Vücudunuzu Optimum Performans İçin Güçlendirmek",
            image: DietExampleImage,
            date: "15/02/2024",
            time: "17:23",
            body: "Vücut geliştirme ve fitness hedeflerinizi destekleyen dengeli ve besin açısından yoğun bir diyet benimseyin. Kas dokusunu onarmak ve oluşturmak için yağsız protein kaynaklarına, egzersiz sırasında sürekli enerji için kompleks karbonhidratlara, hormon üretimi ve eklem sağlığı için sağlıklı yağlara ve genel sağlık ve iyileşmeyi desteklemek için meyve ve sebzelerden elde edilen çeşitli vitamin ve minerallere öncelik verin. Performansı optimize etmek, kas büyümesini artırmak ve kilo yönetimini kolaylaştırmak için yemek zamanlamasına ve makro besin dağılımına dikkat edin.",
            category: "Beslenme",
        },
        {
            title: "Uzun Vadeli Başarının Anahtarı",
            image: ConsistencyExampleImage,
            date: "25/02/2024",
            time: "08:41",
            body: "Tutarlı egzersiz alışkanlıkları oluşturmak, vücut geliştirme ve fitnessta sürdürülebilir ilerleme elde etmenin temelidir. Hedeflerinize ve yaşam tarzınıza uygun düzenli bir egzersiz programına bağlı kalın ve kısa vadeli yoğunluk yerine bağlılığa öncelik verin. Tutarlılık disiplini besler, olumlu alışkanlıklar geliştirir ve istediğiniz sonuçlara doğru istikrarlı ilerlemenizi sağlar. İster spor salonuna gidin, ister yapılandırılmış bir antrenman programını takip edin, ister beslenme planınıza bağlı kalın, tutarlı kalmak çok önemlidir.",
            category: "Tutarlılık",
        },
        {
            title: "Vücudunuzun İyileşme Sürecini Desteklemek",
            image: RestingExampleImage,
            date: "02/03/2024",
            time: "11:19",
            body: "Kas büyümesini, performansını ve genel refahı en üst düzeye çıkarmada dinlenme ve iyileşmenin öneminin farkına varın. Yeterli dinlenme, kaslarınızın onarılmasına ve yenilenmesine olanak tanıyarak aşırı antrenman ve yaralanma riskini en aza indirir. Fizyolojik adaptasyona ve zihinsel yenilenmeye olanak sağlamak için dinlenme günlerini antrenman programınıza ekleyin. Ayrıca kaliteli uykuya öncelik verin çünkü kaliteli uyku hormon regülasyonunda, bağışıklık fonksiyonunda ve bilişsel performansta hayati bir rol oynar. İyileşmeyi teşvik etmek ve kas gerginliğini azaltmak için esneme, foam roller, meditasyon veya masaj gibi rahatlama tekniklerini uygulayın.",
            category: "Dinlenme",
        },
        {
            title: "Vücudunuzun Sinyallerini Dinlemek",
            image: CarefullExampleImage,
            date: "08/03/2024",
            time: "19:53",
            body: "Beden farkındalığınızı geliştirin ve egzersiz sırasında vücudunuzun geri bildirimlerini dinleyin. Yorgunluk, rahatsızlık veya aşırı efor belirtilerine dikkat edin ve egzersiz yoğunluğunuzu, hacminizi veya egzersiz seçiminizi buna göre ayarlayın. Farkındalık eğitimi uygulamak, zihin ve beden arasında daha derin bir bağlantı kurulmasını sağlar, egzersiz tekniğini geliştirir ve yaralanma riskini azaltır. Konsantrasyonu geliştirmek, performansı artırmak ve bütünsel refahı teşvik etmek için görselleştirme, odaklanmış nefes alma veya proprioseptif egzersizler gibi farkındalık uygulamalarını birleştirin.",
            category: "Dikkatli Eğitim",
        },
    ]

    return <BlogContext.Provider value={{ posts: posts }}>
        {children}
    </BlogContext.Provider>
}