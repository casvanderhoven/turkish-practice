// Built-in Turkish phrases for meeting mother-in-law
const BUILT_IN_PHRASES = {
    greetings: [
        {
            id: 'g1',
            turkish: 'Merhaba',
            english: 'Hello',
            pronunciation: 'mer-HA-ba',
            context: 'General greeting for all situations'
        },
        {
            id: 'g2',
            turkish: 'Günaydın',
            english: 'Good morning',
            pronunciation: 'goon-eye-DIN',
            context: 'Morning greeting'
        },
        {
            id: 'g3',
            turkish: 'İyi akşamlar',
            english: 'Good evening',
            pronunciation: 'ee-YEE ak-sham-LAR',
            context: 'Evening greeting'
        },
        {
            id: 'g4',
            turkish: 'Hoş geldiniz',
            english: 'Welcome',
            pronunciation: 'hosh gel-din-IZ',
            context: 'Said when someone arrives (they say this to you)'
        },
        {
            id: 'g5',
            turkish: 'Hoş bulduk',
            english: 'Thank you (response to welcome)',
            pronunciation: 'hosh bool-DUK',
            context: 'Your response when someone says "Hoş geldiniz"'
        },
        {
            id: 'g6',
            turkish: 'Tanıştığımıza memnun oldum',
            english: 'Pleased to meet you',
            pronunciation: 'ta-nish-ti-i-mi-za mem-NOON ol-DUM',
            context: 'When meeting someone for the first time'
        },
        {
            id: 'g7',
            turkish: 'Nasılsınız?',
            english: 'How are you? (formal)',
            pronunciation: 'na-SIL-si-niz',
            context: 'Polite way to ask how someone is'
        },
        {
            id: 'g8',
            turkish: 'İyiyim, teşekkür ederim',
            english: 'I am fine, thank you',
            pronunciation: 'ee-yee-YIM, te-shek-KOOR ed-er-IM',
            context: 'Response to "How are you?"'
        },
        {
            id: 'g9',
            turkish: 'Siz nasılsınız?',
            english: 'And how are you?',
            pronunciation: 'siz na-SIL-si-niz',
            context: 'Ask back after they ask you'
        }
    ],
    compliments: [
        {
            id: 'c1',
            turkish: 'Çok güzel',
            english: 'Very beautiful',
            pronunciation: 'chok goo-ZEL',
            context: 'General compliment for anything'
        },
        {
            id: 'c2',
            turkish: 'Eviniz çok güzel',
            english: 'Your home is very beautiful',
            pronunciation: 'ev-in-IZ chok goo-ZEL',
            context: 'Complimenting their home'
        },
        {
            id: 'c3',
            turkish: 'Yemek çok lezzetli',
            english: 'The food is very delicious',
            pronunciation: 'ye-MEK chok lez-zet-LEE',
            context: 'Complimenting the cooking'
        },
        {
            id: 'c4',
            turkish: 'Ellerinize sağlık',
            english: 'Health to your hands',
            pronunciation: 'el-ler-in-IZ-eh sa-LIK',
            context: 'Said after eating - compliments the cook'
        },
        {
            id: 'c5',
            turkish: 'Çok naziksiniz',
            english: 'You are very kind',
            pronunciation: 'chok na-ZIK-sin-iz',
            context: 'Thanking for hospitality'
        },
        {
            id: 'c6',
            turkish: 'Harika',
            english: 'Wonderful / Amazing',
            pronunciation: 'ha-REE-ka',
            context: 'General positive exclamation'
        },
        {
            id: 'c7',
            turkish: 'Muhteşem',
            english: 'Magnificent / Wonderful',
            pronunciation: 'mooh-te-SHEM',
            context: 'Strong compliment'
        },
        {
            id: 'c8',
            turkish: 'Çok leziz',
            english: 'Very tasty',
            pronunciation: 'chok le-ZIZ',
            context: 'For food'
        }
    ],
    polite: [
        {
            id: 'p1',
            turkish: 'Teşekkür ederim',
            english: 'Thank you',
            pronunciation: 'te-shek-KOOR ed-er-IM',
            context: 'Standard thank you'
        },
        {
            id: 'p2',
            turkish: 'Çok teşekkürler',
            english: 'Thank you very much',
            pronunciation: 'chok te-shek-KOOR-ler',
            context: 'Emphatic thank you'
        },
        {
            id: 'p3',
            turkish: 'Rica ederim',
            english: "You're welcome",
            pronunciation: 'ree-JA ed-er-IM',
            context: 'Response to thank you'
        },
        {
            id: 'p4',
            turkish: 'Lütfen',
            english: 'Please',
            pronunciation: 'LOOT-fen',
            context: 'Polite requests'
        },
        {
            id: 'p5',
            turkish: 'Affedersiniz',
            english: 'Excuse me / I am sorry',
            pronunciation: 'af-fed-er-sin-IZ',
            context: 'Polite apology or getting attention'
        },
        {
            id: 'p6',
            turkish: 'Bir şey değil',
            english: "It's nothing / No problem",
            pronunciation: 'beer shey de-IL',
            context: 'Casual response to thanks'
        },
        {
            id: 'p7',
            turkish: 'İzninizle',
            english: 'With your permission',
            pronunciation: 'iz-nin-iz-LEH',
            context: 'Before doing something'
        },
        {
            id: 'p8',
            turkish: 'Buyurun',
            english: 'Here you go / Please (offering)',
            pronunciation: 'boo-yoo-ROON',
            context: 'When offering something'
        },
        {
            id: 'p9',
            turkish: 'Afiyet olsun',
            english: 'Bon appétit / Enjoy your meal',
            pronunciation: 'ah-fee-YET ol-SOON',
            context: 'Said before or during meals'
        }
    ],
    family: [
        {
            id: 'f1',
            turkish: 'Anne',
            english: 'Mother',
            pronunciation: 'AN-neh',
            context: 'Addressing mother'
        },
        {
            id: 'f2',
            turkish: 'Sizinle tanışmak büyük onur',
            english: 'It is a great honor to meet you',
            pronunciation: 'siz-in-LEH ta-nish-MAK boo-YOOK o-NOOR',
            context: 'Very respectful first meeting'
        },
        {
            id: 'f3',
            turkish: 'Aileniz çok sıcak',
            english: 'Your family is very warm',
            pronunciation: 'eye-len-IZ chok si-JAK',
            context: 'Complimenting the family'
        },
        {
            id: 'f4',
            turkish: 'Ailenizin bir parçası olmaktan mutluyum',
            english: 'I am happy to be part of your family',
            pronunciation: 'eye-len-IZ-in beer par-cha-SI ol-mak-TAN moot-loo-YUM',
            context: 'Expressing happiness about joining family'
        },
        {
            id: 'f5',
            turkish: 'Kızınızı/Oğlunuzu çok seviyorum',
            english: 'I love your daughter/son very much',
            pronunciation: 'ki-zi-ni-ZI/o-loo-noo-ZU chok sev-ee-yor-UM',
            context: 'Expressing love for their child'
        },
        {
            id: 'f6',
            turkish: 'Size saygı duyuyorum',
            english: 'I respect you',
            pronunciation: 'siz-EH sai-GI doo-yoo-yor-UM',
            context: 'Showing respect'
        }
    ],
    responses: [
        {
            id: 'r1',
            turkish: 'Evet',
            english: 'Yes',
            pronunciation: 'eh-VET',
            context: 'Affirmative'
        },
        {
            id: 'r2',
            turkish: 'Hayır',
            english: 'No',
            pronunciation: 'ha-YIR',
            context: 'Negative'
        },
        {
            id: 'r3',
            turkish: 'Tabii ki',
            english: 'Of course',
            pronunciation: 'ta-BEE kee',
            context: 'Agreement'
        },
        {
            id: 'r4',
            turkish: 'Anlıyorum',
            english: 'I understand',
            pronunciation: 'an-li-yor-UM',
            context: 'Showing understanding'
        },
        {
            id: 'r5',
            turkish: 'Biraz Türkçe öğreniyorum',
            english: 'I am learning a little Turkish',
            pronunciation: 'bee-RAZ toork-CHEH eur-ren-ee-yor-UM',
            context: 'Explaining your Turkish ability'
        },
        {
            id: 'r6',
            turkish: 'Anlamadım',
            english: 'I did not understand',
            pronunciation: 'an-la-ma-DIM',
            context: 'When you need something repeated'
        },
        {
            id: 'r7',
            turkish: 'Tekrar söyler misiniz?',
            english: 'Can you say that again?',
            pronunciation: 'tek-RAR soy-ler mee-sin-IZ',
            context: 'Asking for repetition politely'
        },
        {
            id: 'r8',
            turkish: 'Yavaş konuşabilir misiniz?',
            english: 'Can you speak slowly?',
            pronunciation: 'ya-VASH ko-noo-sha-bil-IR mee-sin-IZ',
            context: 'Asking someone to slow down'
        },
        {
            id: 'r9',
            turkish: 'İnşallah',
            english: 'God willing / Hopefully',
            pronunciation: 'in-SHAH-lah',
            context: 'Common phrase when talking about future'
        },
        {
            id: 'r10',
            turkish: 'Maşallah',
            english: 'God has willed it (expressing admiration)',
            pronunciation: 'mah-SHAH-lah',
            context: 'Said when admiring something/someone'
        }
    ]
};

// Category display names
const CATEGORIES = {
    greetings: 'Greetings',
    compliments: 'Compliments',
    polite: 'Polite Expressions',
    family: 'Family',
    responses: 'Useful Responses',
    custom: 'My Phrases'
};
