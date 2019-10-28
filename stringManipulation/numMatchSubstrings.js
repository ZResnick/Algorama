/*
Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

Example :
Input:
S = "abcde"
words = ["a", "bb", "acd", "ace"]
Output: 3
Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
Note:

All words in words and S will only consists of lowercase letters.
The length of S will be in the range of [1, 50000].
The length of words will be in the range of [1, 5000].
The length of words[i] will be in the range of [1, 50].
*/

//Test cases
let words1 = ['a', 'bb', 'acd', 'ace'];
let word1 = 'abcde';

const memoMaker = str => {
  let memo = {};
  for (let i = 0; i < str.length; i++) {
    if (memo[str[i]]) memo[str[i]]++;
    else memo[str[i]] = 1;
  }
  return memo;
};

const checker = (strMemo, wordMemo) => {
  for (let letter in wordMemo) {
    if (!strMemo[letter]) return 0;
    if (wordMemo[letter] > strMemo[letter]) return 0;
  }
  return 1;
};

const numMatchString = (str, arr) => {
  let counter = 0;
  let strMemo = memoMaker(str);
  for (let i = 0; i < arr.length; i++) {
    let currentWordMemo = memoMaker(arr[i]);
    counter += checker(strMemo, currentWordMemo);
  }
  return counter;
};

console.log(numMatchString('abcde', ['a', 'bb', 'acd', 'ace']));
console.log(numMatchString('abcde', ['a', 'bb', 'acd', 'ace']));
console.log(numMatchString('abcde', ['a', 'bb', 'acd', 'ace']));
console.log(
  numMatchString('dsahjpjauf', ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax'])
);
console.log(
  numMatchString(
    'ricogwqznwxxcpueelcobbbkuvxxrvgyehsudccpsnuxpcqobtvwkuvsubiidjtccoqvuahijyefbpqhbejuisksutsowhufsygtwteiqyligsnbqglqblhpdzzeurtdohdcbjvzgjwylmmoiundjscnlhbrhookmioxqighkxfugpeekgtdofwzemelpyjsdeeppapjoliqlhbrbghqjezzaxuwyrbczodtrhsvnaxhcjiyiphbglyolnswlvtlbmkrsurrcsgdzutwgjofowhryrubnxkahocqjzwwagqidjhwbunvlchojtbvnzdzqpvrazfcxtvhkruvuturdicnucvndigovkzrqiyastqpmfmuouycodvsyjajekhvyjyrydhxkdhffyytldcdlxqbaszbuxsacqwqnhrewhagldzhryzdmmrwnxhaqfezeeabuacyswollycgiowuuudrgzmwnxaezuqlsfvchjfloczlwbefksxsbanrektvibbwxnokzkhndmdhweyeycamjeplecewpnpbshhidnzwopdjuwbecarkgapyjfgmanuavzrxricbgagblomyseyvoeurekqjyljosvbneofjzxtaizjypbcxnbfeibrfjwyjqrisuybfxpvqywqjdlyznmojdhbeomyjqptltpugzceyzenflfnhrptuugyfsghluythksqhmxlmggtcbdddeoincygycdpehteiugqbptyqbvokpwovbnplshnzafunqglnpjvwddvdlmjjyzmwwxzjckmaptilrbfpjxiarmwalhbdjiwbaknvcqovwcqiekzfskpbhgxpyomekqvzpqyirelpadooxjhsyxjkfqavbaoqqvvknqryhotjritrkvdveyapjfsfzenfpuazdrfdofhudqbfnzxnvpluwicurrtshyvevkriudayyysepzqfgqwhgobwyhxltligahroyshfndydvffd',
    [
      'iowuuudrgzmw',
      'azfcxtvhkruvuturdicnucvndigovkzrq',
      'ylmmo',
      'maptilrbfpjxiarmwalhbd',
      'oqvuahijyefbpqhbejuisksutsowhufsygtwteiqyligsnbqgl',
      'ytldcdlxqbaszbuxsacqwqnhrewhagldzhr',
      'zeeab',
      'cqie',
      'pvrazfcxtvhkruvuturdicnucvndigovkzrqiya',
      'zxnvpluwicurrtshyvevkriudayyysepzq',
      'wyhxltligahroyshfn',
      'nhrewhagldzhryzdmmrwn',
      'yqbvokpwovbnplshnzafunqglnpjvwddvdlmjjyzmw',
      'nhrptuugyfsghluythksqhmxlmggtcbdd',
      'yligsnbqglqblhpdzzeurtdohdcbjvzgjwylmmoiundjsc',
      'zdrfdofhudqbfnzxnvpluwicurrtshyvevkriudayyysepzq',
      'ncygycdpehteiugqbptyqbvokpwovbnplshnzafun',
      'gdzutwgjofowhryrubnxkahocqjzww',
      'eppapjoliqlhbrbgh',
      'qwhgobwyhxltligahroys',
      'dzutwgjofowhryrubnxkah',
      'rydhxkdhffyytldcdlxqbaszbuxs',
      'tyqbvokpwovbnplshnzafunqglnpjvwddvdlmjjyzmwwxzjc',
      'khvyjyrydhxkdhffyytldcdlxqbasz',
      'jajekhvyjyrydhxkdhffyytldcdlxqbaszbuxsacqwqn',
      'ppapjoliqlhbrbghq',
      'zmwwxzjckmaptilrbfpjxiarm',
      'nxkahocqjzwwagqidjhwbunvlchoj',
      'ybfxpvqywqjdlyznmojdhbeomyjqptltp',
      'udrgzmwnxae',
      'nqglnpjvwddvdlmjjyzmww',
      'swlvtlbmkrsurrcsgdzutwgjofowhryrubn',
      'hudqbfnzxnvpluwicurr',
      'xaezuqlsfvchjf',
      'tvibbwxnokzkhndmdhweyeycamjeplec',
      'olnswlvtlbmkrsurrcsgdzu',
      'qiyastqpmfmuouycodvsyjajekhvyjyrydhxkdhffyyt',
      'eiqyligsnbqglqblhpdzzeurtdohdcbjvzgjwyl',
      'cgiowuuudrgzmwnxaezuqlsfvchjflocz',
      'rxric',
      'cygycdpehteiugqbptyqbvokpwovbnplshnzaf',
      'g',
      'surrcsgd',
      'yzenflfnhrptuugyfsghluythksqh',
      'gdzutwgjofowhryrubnxkahocqjzwwagqid',
      'ddeoincygycdpeh',
      'yznmojdhbeomyjqptltpugzceyzenflfnhrptuug',
      'ejuisks',
      'teiqyligsnbqglqblhpdzzeurtdohdcbjvzgjwylmmoi',
      'mrwnxhaqfezeeabuacyswollycgio',
      'qfskkpfakjretogrokmxemjjbvgmmqrfdxlkfvycwalbdeumav',
      'wjgjhlrpvhqozvvkifhftnfqcfjmmzhtxsoqbeduqmnpvimagq',
      'ibxhtobuolmllbasaxlanjgalgmbjuxmqpadllryaobcucdeqc',
      'ydlddogzvzttizzzjohfsenatvbpngarutztgdqczkzoenbxzv',
      'rmsakibpprdrttycxglfgtjlifznnnlkgjqseguijfctrcahbb',
      'pqquuarnoybphojyoyizhuyjfgwdlzcmkdbdqzatgmabhnpuyh',
      'akposmzwykwrenlcrqwrrvsfqxzohrramdajwzlseguupjfzvd',
      'vyldyqpvmnoemzeyxslcoysqfpvvotenkmehqvopynllvwhxzr',
      'ysyskgrbolixwmffygycvgewxqnxvjsfefpmxrtsqsvpowoctw',
      'oqjgumitldivceezxgoiwjgozfqcnkergctffspdxdbnmvjago',
      'bpfgqhlkvevfazcmpdqakonkudniuobhqzypqlyocjdngltywn',
      'ttucplgotbiceepzfxdebvluioeeitzmesmoxliuwqsftfmvlg',
      'xhkklcwblyjmdyhfscmeffmmerxdioseybombzxjatkkltrvzq',
      'qkvvbrgbzzfhzizulssaxupyqwniqradvkjivedckjrinrlxgi',
      'itjudnlqncbspswkbcwldkwujlshwsgziontsobirsvskmjbrq',
      'nmfgxfeqgqefxqivxtdrxeelsucufkhivijmzgioxioosmdpwx',
      'ihygxkykuczvyokuveuchermxceexajilpkcxjjnwmdbwnxccl',
      'etvcfbmadfxlprevjjnojxwonnnwjnamgrfwohgyhievupsdqd',
      'ngskodiaxeswtqvjaqyulpedaqcchcuktfjlzyvddfeblnczmh',
      'vnmntdvhaxqltluzwwwwrbpqwahebgtmhivtkadczpzabgcjzx',
      'yjqqdvoxxxjbrccoaqqspqlsnxcnderaewsaqpkigtiqoqopth',
      'wdytqvztzbdzffllbxexxughdvetajclynypnzaokqizfxqrjl',
      'yvvwkphuzosvvntckxkmvuflrubigexkivyzzaimkxvqitpixo',
      'lkdgtxmbgsenzmrlccmsunaezbausnsszryztfhjtezssttmsr',
      'idyybesughzyzfdiibylnkkdeatqjjqqjbertrcactapbcarzb',
      'ujiajnirancrfdvrfardygbcnzkqsvujkhcegdfibtcuxzbpds',
      'jjtkmalhmrknaasskjnixzwjgvusbozslrribgazdhaylaxobj',
      'nizuzttgartfxiwcsqchizlxvvnebqdtkmghtcyzjmgyzszwgi',
      'egtvislckyltpfogtvfbtxbsssuwvjcduxjnjuvnqyiykvmrxl',
      'ozvzwalcvaobxbicbwjrububyxlmfcokdxcrkvuehbnokkzala',
      'azhukctuheiwghkalboxfnuofwopsrutamthzyzlzkrlsefwcz',
      'yhvjjzsxlescylsnvmcxzcrrzgfhbsdsvdfcykwifzjcjjbmmu',
      'tspdebnuhrgnmhhuplbzvpkkhfpeilbwkkbgfjiuwrdmkftphk',
      'jvnbeqzaxecwxspuxhrngmvnkvulmgobvsnqyxdplrnnwfhfqq',
      'bcbkgwpfmmqwmzjgmflichzhrjdjxbcescfijfztpxpxvbzjch',
      'bdrkibtxygyicjcfnzigghdekmgoybvfwshxqnjlctcdkiunob',
      'koctqrqvfftflwsvssnokdotgtxalgegscyeotcrvyywmzescq',
      'boigqjvosgxpsnklxdjaxtrhqlyvanuvnpldmoknmzugnubfoa',
      'jjtxbxyazxldpnbxzgslgguvgyevyliywihuqottxuyowrwfar',
      'zqsacrwcysmkfbpzxoaszgqqsvqglnblmxhxtjqmnectaxntvb',
      'izcakfitdhgujdborjuhtwubqcoppsgkqtqoqyswjfldsbfcct',
      'rroiqffqzenlerchkvmjsbmoybisjafcdzgeppyhojoggdlpzq',
      'xwjqfobmmqomhczwufwlesolvmbtvpdxejzslxrvnijhvevxmc',
      'ccrubahioyaxuwzloyhqyluwoknxnydbedenrccljoydfxwaxy',
      'jjoeiuncnvixvhhynaxbkmlurwxcpukredieqlilgkupminjaj',
      'pdbsbjnrqzrbmewmdkqqhcpzielskcazuliiatmvhcaksrusae',
      'nizbnxpqbzsihakkadsbtgxovyuebgtzvrvbowxllkzevktkuu',
      'hklskdbopqjwdrefpgoxaoxzevpdaiubejuaxxbrhzbamdznrr',
      'uccnuegvmkqtagudujuildlwefbyoywypakjrhiibrxdmsspjl',
      'awinuyoppufjxgqvcddleqdhbkmolxqyvsqprnwcoehpturicf',
    ]
  )
);
