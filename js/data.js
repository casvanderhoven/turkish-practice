// Built-in Turkish phrases - comprehensive collection
const BUILT_IN_PHRASES = {
    greetings: [
        {
            id: 'g1',
            turkish: 'Merhaba',
            english: 'Hello',
            pronunciation: 'mer-HA-ba',
            context: 'General greeting for all situations - safest default'
        },
        {
            id: 'g2',
            turkish: 'Selam',
            english: 'Hi',
            pronunciation: 'se-LAM',
            context: 'Casual greeting among friends'
        },
        {
            id: 'g3',
            turkish: 'Selamün aleyküm',
            english: "God's greetings be upon you",
            pronunciation: 'se-la-MOON a-ley-KOOM',
            context: 'Religious/traditional greeting'
        },
        {
            id: 'g4',
            turkish: 'Aleyküm selam',
            english: "God's greetings be upon you as well",
            pronunciation: 'a-ley-KOOM se-LAM',
            context: 'Response to Selamün aleyküm'
        },
        {
            id: 'g5',
            turkish: 'Günaydın',
            english: 'Good morning',
            pronunciation: 'goon-eye-DIN',
            context: 'Morning greeting'
        },
        {
            id: 'g6',
            turkish: 'İyi günler',
            english: 'Good day',
            pronunciation: 'ee-YEE goon-LER',
            context: 'Daytime greeting or farewell'
        },
        {
            id: 'g7',
            turkish: 'Tünaydın',
            english: 'Good afternoon',
            pronunciation: 'toon-eye-DIN',
            context: 'Afternoon greeting'
        },
        {
            id: 'g8',
            turkish: 'İyi akşamlar',
            english: 'Good evening',
            pronunciation: 'ee-YEE ak-sham-LAR',
            context: 'Evening greeting or farewell'
        },
        {
            id: 'g9',
            turkish: 'Hoş geldiniz',
            english: 'Welcome',
            pronunciation: 'hosh gel-din-IZ',
            context: 'Said to someone arriving - they say this to you'
        },
        {
            id: 'g10',
            turkish: 'Hoş bulduk',
            english: "I've found you well / Thank you for the welcome",
            pronunciation: 'hosh bool-DUK',
            context: 'Your response when someone says Hoş geldiniz - MUST use this!'
        },
        {
            id: 'g11',
            turkish: 'Kolay gelsin',
            english: 'May your work be easy',
            pronunciation: 'ko-LIE gel-SIN',
            context: 'Said to someone working - also used as farewell'
        },
        {
            id: 'g12',
            turkish: 'Nasılsınız?',
            english: 'How are you? (formal)',
            pronunciation: 'na-SIL-si-niz',
            context: 'Polite way to ask how someone is'
        },
        {
            id: 'g13',
            turkish: 'Nasılsın?',
            english: 'How are you? (informal)',
            pronunciation: 'na-SIL-sin',
            context: 'Casual way to ask how someone is'
        },
        {
            id: 'g14',
            turkish: 'Ne haber? / N\'aber?',
            english: "What's up? / How are you?",
            pronunciation: 'neh ha-BER / NA-ber',
            context: 'Casual greeting among friends'
        },
        {
            id: 'g15',
            turkish: 'İyiyim, teşekkür ederim. Siz?',
            english: "I'm fine, thank you. And you?",
            pronunciation: 'ee-yee-YIM, te-shek-KOOR ed-er-IM. siz?',
            context: 'Response to How are you - just say you\'re fine!'
        },
        {
            id: 'g16',
            turkish: 'Ne yapıyorsun?',
            english: 'What are you doing?',
            pronunciation: 'neh ya-pi-yor-SUN',
            context: 'Casual question'
        },
        {
            id: 'g17',
            turkish: 'Adınız ne?',
            english: 'What is your name? (formal)',
            pronunciation: 'a-di-NIZ neh',
            context: 'Asking someone\'s name politely'
        },
        {
            id: 'g18',
            turkish: 'Benim adım ___',
            english: 'My name is ___',
            pronunciation: 'ben-IM a-DIM',
            context: 'Introducing yourself'
        },
        {
            id: 'g19',
            turkish: 'Tanıştığımıza memnun oldum',
            english: 'Pleased to meet you',
            pronunciation: 'ta-nish-ti-i-mi-za mem-NOON ol-DUM',
            context: 'When meeting someone for the first time'
        },
        {
            id: 'g20',
            turkish: 'Memnun oldum',
            english: "I'm glad to meet you",
            pronunciation: 'mem-NOON ol-DUM',
            context: 'Shorter version of pleased to meet you'
        },
        {
            id: 'g21',
            turkish: 'Ben de',
            english: 'Me too',
            pronunciation: 'ben deh',
            context: 'Response to Memnun oldum'
        }
    ],
    farewells: [
        {
            id: 'fw1',
            turkish: 'Hoşça kalın',
            english: 'Goodbye / Stay well',
            pronunciation: 'hosh-CHA ka-LIN',
            context: 'Safest farewell - works any time of day'
        },
        {
            id: 'fw2',
            turkish: 'Güle güle',
            english: 'Bye bye',
            pronunciation: 'goo-LEH goo-LEH',
            context: 'Casual goodbye'
        },
        {
            id: 'fw3',
            turkish: 'İyi geceler',
            english: 'Good night',
            pronunciation: 'ee-YEE geh-jeh-LER',
            context: 'Night time farewell'
        },
        {
            id: 'fw4',
            turkish: 'Görüşürüz',
            english: 'See you',
            pronunciation: 'geur-oo-shoo-ROOZ',
            context: 'Casual see you later'
        },
        {
            id: 'fw5',
            turkish: 'Kendinize iyi bakın',
            english: 'Take care of yourself',
            pronunciation: 'ken-din-IZ-eh ee-YEE ba-KIN',
            context: 'Caring farewell'
        },
        {
            id: 'fw6',
            turkish: 'Baybay',
            english: 'Bye-bye',
            pronunciation: 'bye-BYE',
            context: 'Very casual, borrowed from English'
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
            turkish: 'Teşekkürler',
            english: 'Thanks',
            pronunciation: 'te-shek-KOOR-ler',
            context: 'Slightly more casual thanks'
        },
        {
            id: 'p3',
            turkish: 'Sağ olun',
            english: 'Thank you (casual)',
            pronunciation: 'SA ol-UN',
            context: 'Informal thank you'
        },
        {
            id: 'p4',
            turkish: 'Rica ederim',
            english: "You're welcome",
            pronunciation: 'ree-JA ed-er-IM',
            context: 'Response to thank you'
        },
        {
            id: 'p5',
            turkish: 'Bir şey değil',
            english: "It's nothing / No problem",
            pronunciation: 'beer shey de-IL',
            context: 'Casual response to thanks'
        },
        {
            id: 'p6',
            turkish: 'Lütfen',
            english: 'Please',
            pronunciation: 'LOOT-fen',
            context: 'Polite requests'
        },
        {
            id: 'p7',
            turkish: 'Affedersiniz',
            english: 'Excuse me / I am sorry',
            pronunciation: 'af-fed-er-sin-IZ',
            context: 'Polite apology or getting attention'
        },
        {
            id: 'p8',
            turkish: 'Pardon',
            english: 'Excuse me',
            pronunciation: 'par-DON',
            context: 'Getting attention, borrowed from French'
        },
        {
            id: 'p9',
            turkish: 'Özür dilerim',
            english: 'I apologize',
            pronunciation: 'eu-ZOOR dil-er-IM',
            context: 'Formal apology'
        },
        {
            id: 'p10',
            turkish: 'Üzgünüm',
            english: "I'm sorry",
            pronunciation: 'ooz-goo-NOOM',
            context: 'Expressing regret'
        },
        {
            id: 'p11',
            turkish: 'Sorun değil',
            english: 'No problem',
            pronunciation: 'so-RUN de-IL',
            context: 'Casual response'
        },
        {
            id: 'p12',
            turkish: 'İyi şanslar',
            english: 'Good luck',
            pronunciation: 'ee-YEE shans-LAR',
            context: 'Wishing someone luck'
        },
        {
            id: 'p13',
            turkish: 'Tebrik ederim',
            english: 'Congratulations',
            pronunciation: 'teb-RIK ed-er-IM',
            context: 'Celebrating achievement'
        },
        {
            id: 'p14',
            turkish: 'Çok yaşa',
            english: 'Bless you (after sneeze)',
            pronunciation: 'chok ya-SHA',
            context: 'Literally "live long" - said after someone sneezes'
        },
        {
            id: 'p15',
            turkish: 'Geçmiş olsun',
            english: 'Get well soon / May it pass',
            pronunciation: 'gech-MISH ol-SUN',
            context: 'Said to someone who is sick or had difficulty'
        },
        {
            id: 'p16',
            turkish: 'Başınız sağ olsun',
            english: 'My condolences',
            pronunciation: 'ba-shi-NIZ SA ol-SUN',
            context: 'Said when someone has lost a loved one'
        },
        {
            id: 'p17',
            turkish: 'İzninizle',
            english: 'With your permission',
            pronunciation: 'iz-nin-iz-LEH',
            context: 'Before doing something'
        },
        {
            id: 'p18',
            turkish: 'Buyurun',
            english: 'Here you go / Please (offering)',
            pronunciation: 'boo-yoo-ROON',
            context: 'When offering something'
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
            turkish: 'Elinize sağlık',
            english: 'Health to your hands',
            pronunciation: 'el-in-IZ-eh sa-LIK',
            context: 'Thank you for making something (food, crafts, etc.)'
        },
        {
            id: 'c5',
            turkish: 'Afiyet olsun',
            english: 'Bon appétit / Enjoy your meal',
            pronunciation: 'ah-fee-YET ol-SOON',
            context: 'Said by host/cook - response is Teşekkürler or Elinize sağlık'
        },
        {
            id: 'c6',
            turkish: 'Çok naziksiniz',
            english: 'You are very kind',
            pronunciation: 'chok na-ZIK-sin-iz',
            context: 'Thanking for hospitality'
        },
        {
            id: 'c7',
            turkish: 'Harika',
            english: 'Wonderful / Amazing',
            pronunciation: 'ha-REE-ka',
            context: 'General positive exclamation'
        },
        {
            id: 'c8',
            turkish: 'Muhteşem',
            english: 'Magnificent / Wonderful',
            pronunciation: 'mooh-te-SHEM',
            context: 'Strong compliment'
        },
        {
            id: 'c9',
            turkish: 'Yemek harikaydı',
            english: 'The food was great!',
            pronunciation: 'ye-MEK ha-ree-KAY-di',
            context: 'After finishing a meal'
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
            turkish: '___ Bey',
            english: 'Mr. ___',
            pronunciation: 'bey',
            context: 'Title for men - placed after first name'
        },
        {
            id: 'f3',
            turkish: '___ Hanım',
            english: 'Mrs./Miss ___',
            pronunciation: 'ha-NIM',
            context: 'Title for women - placed after first name'
        },
        {
            id: 'f4',
            turkish: 'Sizinle tanışmak büyük onur',
            english: 'It is a great honor to meet you',
            pronunciation: 'siz-in-LEH ta-nish-MAK boo-YOOK o-NOOR',
            context: 'Very respectful first meeting'
        },
        {
            id: 'f5',
            turkish: 'Aileniz çok sıcak',
            english: 'Your family is very warm',
            pronunciation: 'eye-len-IZ chok si-JAK',
            context: 'Complimenting the family'
        },
        {
            id: 'f6',
            turkish: 'Ailenizin bir parçası olmaktan mutluyum',
            english: 'I am happy to be part of your family',
            pronunciation: 'eye-len-IZ-in beer par-cha-SI ol-mak-TAN moot-loo-YUM',
            context: 'Expressing happiness about joining family'
        },
        {
            id: 'f7',
            turkish: 'Size saygı duyuyorum',
            english: 'I respect you',
            pronunciation: 'siz-EH sai-GI doo-yoo-yor-UM',
            context: 'Showing respect'
        },
        {
            id: 'f8',
            turkish: 'Seni seviyorum',
            english: 'I love you',
            pronunciation: 'sen-EE sev-ee-yor-UM',
            context: 'Expressing love'
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
            turkish: 'Olur',
            english: 'Sure / Okay',
            pronunciation: 'o-LOOR',
            context: 'Agreeing to something'
        },
        {
            id: 'r4',
            turkish: 'Tabii',
            english: 'Of course',
            pronunciation: 'ta-BEE',
            context: 'Agreement'
        },
        {
            id: 'r5',
            turkish: 'Tamam',
            english: 'Okay',
            pronunciation: 'ta-MAM',
            context: 'Agreement/acknowledgment'
        },
        {
            id: 'r6',
            turkish: 'Yok',
            english: 'No / None',
            pronunciation: 'yok',
            context: 'Informal no, or "there isn\'t"'
        },
        {
            id: 'r7',
            turkish: 'Olmaz',
            english: "I can't / It won't work",
            pronunciation: 'ol-MAZ',
            context: 'Declining something'
        },
        {
            id: 'r8',
            turkish: 'Anlıyorum',
            english: 'I understand',
            pronunciation: 'an-li-yor-UM',
            context: 'Showing understanding'
        },
        {
            id: 'r9',
            turkish: 'Anlamıyorum',
            english: "I don't understand",
            pronunciation: 'an-la-mi-yor-UM',
            context: 'When confused'
        },
        {
            id: 'r10',
            turkish: 'Türkçe bilmiyorum',
            english: "I don't speak Turkish",
            pronunciation: 'toork-CHEH bil-mee-yor-UM',
            context: 'Explaining language barrier'
        },
        {
            id: 'r11',
            turkish: 'Biraz Türkçe öğreniyorum',
            english: 'I am learning a little Turkish',
            pronunciation: 'bee-RAZ toork-CHEH eur-ren-ee-yor-UM',
            context: 'Explaining your Turkish ability'
        },
        {
            id: 'r12',
            turkish: 'İngilizce konuşuyor musunuz?',
            english: 'Do you speak English?',
            pronunciation: 'in-gee-liz-JEH ko-noo-shoo-yor moo-soo-NOOZ',
            context: 'Asking about English'
        },
        {
            id: 'r13',
            turkish: 'Yavaş konuşabilir misiniz?',
            english: 'Can you speak slowly?',
            pronunciation: 'ya-VASH ko-noo-sha-bil-IR mee-sin-IZ',
            context: 'Asking someone to slow down'
        },
        {
            id: 'r14',
            turkish: 'Tekrar söyler misiniz?',
            english: 'Can you say that again?',
            pronunciation: 'tek-RAR soy-ler mee-sin-IZ',
            context: 'Asking for repetition'
        },
        {
            id: 'r15',
            turkish: 'İnşallah',
            english: 'God willing / Hopefully',
            pronunciation: 'in-SHAH-lah',
            context: 'Common phrase when talking about future'
        },
        {
            id: 'r16',
            turkish: 'Maşallah',
            english: 'God has willed it (expressing admiration)',
            pronunciation: 'mah-SHAH-lah',
            context: 'Said when admiring something/someone'
        },
        {
            id: 'r17',
            turkish: 'Unuttum',
            english: 'I forgot',
            pronunciation: 'oo-noot-TUM',
            context: 'When you forgot something'
        },
        {
            id: 'r18',
            turkish: 'Gitmem lazım',
            english: 'I have to go',
            pronunciation: 'git-MEM la-ZIM',
            context: 'Excusing yourself'
        }
    ],
    numbers: [
        {
            id: 'n1',
            turkish: 'Bir',
            english: 'One (1)',
            pronunciation: 'beer',
            context: 'Number 1'
        },
        {
            id: 'n2',
            turkish: 'İki',
            english: 'Two (2)',
            pronunciation: 'ee-KEE',
            context: 'Number 2'
        },
        {
            id: 'n3',
            turkish: 'Üç',
            english: 'Three (3)',
            pronunciation: 'ooch',
            context: 'Number 3'
        },
        {
            id: 'n4',
            turkish: 'Dört',
            english: 'Four (4)',
            pronunciation: 'durt',
            context: 'Number 4'
        },
        {
            id: 'n5',
            turkish: 'Beş',
            english: 'Five (5)',
            pronunciation: 'besh',
            context: 'Number 5'
        },
        {
            id: 'n6',
            turkish: 'Altı',
            english: 'Six (6)',
            pronunciation: 'al-TI',
            context: 'Number 6'
        },
        {
            id: 'n7',
            turkish: 'Yedi',
            english: 'Seven (7)',
            pronunciation: 'yed-EE',
            context: 'Number 7'
        },
        {
            id: 'n8',
            turkish: 'Sekiz',
            english: 'Eight (8)',
            pronunciation: 'sek-IZ',
            context: 'Number 8'
        },
        {
            id: 'n9',
            turkish: 'Dokuz',
            english: 'Nine (9)',
            pronunciation: 'dok-UZ',
            context: 'Number 9'
        },
        {
            id: 'n10',
            turkish: 'On',
            english: 'Ten (10)',
            pronunciation: 'on',
            context: 'Number 10'
        }
    ],
    restaurant: [
        {
            id: 'rest1',
            turkish: 'Menü alabilir miyim?',
            english: 'Can I have a menu?',
            pronunciation: 'men-OO a-la-bil-IR mee-yim',
            context: 'Requesting menu'
        },
        {
            id: 'rest2',
            turkish: 'Bakar mısınız?',
            english: 'Excuse me! (to waiter)',
            pronunciation: 'ba-KAR mi-si-NIZ',
            context: 'Getting waiter attention - NOT Bekâr mısınız (Are you single?)'
        },
        {
            id: 'rest3',
            turkish: 'Ben ___ alabilir miyim?',
            english: 'Can I have ___?',
            pronunciation: 'ben ___ a-la-bil-IR mee-yim',
            context: 'Ordering something - very useful!'
        },
        {
            id: 'rest4',
            turkish: 'Ben ___ alayım',
            english: "I'll have ___",
            pronunciation: 'ben ___ a-la-YIM',
            context: 'Another way to order'
        },
        {
            id: 'rest5',
            turkish: 'Hesap lütfen',
            english: 'Bill please',
            pronunciation: 'heh-SAP loot-FEN',
            context: 'Asking for the bill'
        },
        {
            id: 'rest6',
            turkish: 'Hesabı alabilir miyim?',
            english: 'Can I have the bill?',
            pronunciation: 'heh-sa-BI a-la-bil-IR mee-yim',
            context: 'Polite way to ask for bill'
        },
        {
            id: 'rest7',
            turkish: 'Nakit mi kart mı?',
            english: 'Cash or card?',
            pronunciation: 'na-KIT mee kart MI',
            context: 'Waiter will ask this'
        },
        {
            id: 'rest8',
            turkish: 'Nakit',
            english: 'Cash',
            pronunciation: 'na-KIT',
            context: 'Paying with cash'
        },
        {
            id: 'rest9',
            turkish: 'Kart',
            english: 'Card',
            pronunciation: 'kart',
            context: 'Paying with card'
        },
        {
            id: 'rest10',
            turkish: 'Lavabo nerede?',
            english: 'Where is the restroom?',
            pronunciation: 'la-va-BO neh-reh-DEH',
            context: 'Finding the bathroom'
        },
        {
            id: 'rest11',
            turkish: 'Karnım acıktı',
            english: "I'm hungry",
            pronunciation: 'kar-NIM a-jik-TI',
            context: 'Expressing hunger'
        },
        {
            id: 'rest12',
            turkish: 'Karnım tok',
            english: "I'm full",
            pronunciation: 'kar-NIM tok',
            context: 'When you\'ve had enough'
        },
        {
            id: 'rest13',
            turkish: 'Susadım',
            english: "I'm thirsty",
            pronunciation: 'soo-sa-DIM',
            context: 'Expressing thirst'
        },
        {
            id: 'rest14',
            turkish: 'Vejetaryen yemekler var mı?',
            english: 'Are there vegetarian dishes?',
            pronunciation: 'vej-eh-tar-YEN yeh-mek-LER var MI',
            context: 'Dietary needs'
        },
        {
            id: 'rest15',
            turkish: '___ var mı?',
            english: 'Is there ___?',
            pronunciation: '___ var MI',
            context: 'Asking if something is available'
        },
        {
            id: 'rest16',
            turkish: 'Var',
            english: 'There is / Yes (we have it)',
            pronunciation: 'var',
            context: 'Affirmative for availability'
        }
    ],
    shopping: [
        {
            id: 'sh1',
            turkish: 'Bu ne kadar?',
            english: 'How much is this?',
            pronunciation: 'boo neh ka-DAR',
            context: 'Asking price - essential for bazaars!'
        },
        {
            id: 'sh2',
            turkish: 'Bu kaç beden?',
            english: 'What size is this?',
            pronunciation: 'boo kach beh-DEN',
            context: 'Asking about clothing size'
        },
        {
            id: 'sh3',
            turkish: 'Kredi kartı ile ödeyebilir miyim?',
            english: 'Can I pay by credit card?',
            pronunciation: 'kreh-DEE kar-TI ee-LEH eu-deh-yeh-bil-IR mee-yim',
            context: 'Asking about payment method'
        },
        {
            id: 'sh4',
            turkish: 'Alışveriş merkezi nerede?',
            english: 'Where is the shopping mall?',
            pronunciation: 'a-lish-veh-RISH mer-kez-EE neh-reh-DEH',
            context: 'Finding shopping areas'
        },
        {
            id: 'sh5',
            turkish: 'Çok pahalı',
            english: 'Too expensive',
            pronunciation: 'chok pa-ha-LI',
            context: 'Useful for bargaining!'
        }
    ],
    questions: [
        {
            id: 'q1',
            turkish: 'Kim?',
            english: 'Who?',
            pronunciation: 'kim',
            context: 'Question word'
        },
        {
            id: 'q2',
            turkish: 'Ne?',
            english: 'What?',
            pronunciation: 'neh',
            context: 'Question word'
        },
        {
            id: 'q3',
            turkish: 'Ne zaman?',
            english: 'When?',
            pronunciation: 'neh za-MAN',
            context: 'Question word'
        },
        {
            id: 'q4',
            turkish: 'Kaçta?',
            english: 'At what time?',
            pronunciation: 'kach-TA',
            context: 'Asking about time'
        },
        {
            id: 'q5',
            turkish: 'Nasıl?',
            english: 'How?',
            pronunciation: 'na-SIL',
            context: 'Question word'
        },
        {
            id: 'q6',
            turkish: 'Nerede?',
            english: 'Where?',
            pronunciation: 'neh-reh-DEH',
            context: 'Question word'
        },
        {
            id: 'q7',
            turkish: 'Neden? / Niye?',
            english: 'Why?',
            pronunciation: 'neh-DEN / nee-YEH',
            context: 'Question word - both mean why'
        },
        {
            id: 'q8',
            turkish: 'Ne kadar?',
            english: 'How much?',
            pronunciation: 'neh ka-DAR',
            context: 'Asking about quantity or price'
        },
        {
            id: 'q9',
            turkish: 'Kaç tane?',
            english: 'How many?',
            pronunciation: 'kach ta-NEH',
            context: 'Asking about countable items'
        },
        {
            id: 'q10',
            turkish: 'Ne oluyor?',
            english: "What's happening?",
            pronunciation: 'neh o-loo-YOR',
            context: 'Asking about a situation'
        }
    ],
    emergencies: [
        {
            id: 'em1',
            turkish: 'Yardım edebilir misiniz?',
            english: 'Can you help me?',
            pronunciation: 'yar-DIM ed-eh-bil-IR mee-sin-IZ',
            context: 'Politely asking for help'
        },
        {
            id: 'em2',
            turkish: 'Bana yardım edin lütfen!',
            english: 'Please help me!',
            pronunciation: 'ba-NA yar-DIM ed-IN loot-FEN',
            context: 'Urgent request for help'
        },
        {
            id: 'em3',
            turkish: 'İmdat!',
            english: 'Help!',
            pronunciation: 'im-DAT',
            context: 'Emergency cry for help'
        },
        {
            id: 'em4',
            turkish: 'Polis nerede?',
            english: 'Where is the police?',
            pronunciation: 'po-LIS neh-reh-DEH',
            context: 'Finding police'
        },
        {
            id: 'em5',
            turkish: 'Polisi arayın',
            english: 'Call the police',
            pronunciation: 'po-lis-EE a-ra-YIN',
            context: 'Emergency'
        },
        {
            id: 'em6',
            turkish: 'Hastane nerede?',
            english: 'Where is the hospital?',
            pronunciation: 'has-ta-NEH neh-reh-DEH',
            context: 'Medical emergency'
        },
        {
            id: 'em7',
            turkish: 'Ambulans çağırın',
            english: 'Call an ambulance',
            pronunciation: 'am-boo-LANS cha-i-RIN',
            context: 'Medical emergency'
        },
        {
            id: 'em8',
            turkish: 'Yangın var!',
            english: 'There is a fire!',
            pronunciation: 'yan-GIN var',
            context: 'Fire emergency'
        },
        {
            id: 'em9',
            turkish: 'Kayboldum',
            english: "I'm lost",
            pronunciation: 'kai-bol-DUM',
            context: 'When you need directions'
        },
        {
            id: 'em10',
            turkish: 'Pasaportumu kaybettim',
            english: 'I lost my passport',
            pronunciation: 'pa-sa-por-too-MOO kai-bet-TIM',
            context: 'Lost documents'
        },
        {
            id: 'em11',
            turkish: 'Benim ___ alerjim var',
            english: "I'm allergic to ___",
            pronunciation: 'ben-IM ___ a-ler-JIM var',
            context: 'Medical information'
        }
    ]
};

// Category display names
const CATEGORIES = {
    greetings: 'Greetings',
    farewells: 'Farewells',
    polite: 'Polite Expressions',
    compliments: 'Compliments',
    family: 'Family & Love',
    responses: 'Responses',
    numbers: 'Numbers',
    restaurant: 'Restaurant',
    shopping: 'Shopping',
    questions: 'Questions',
    emergencies: 'Emergencies',
    custom: 'My Phrases'
};
