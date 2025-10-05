import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/AlphabetScreen.styles';

export default function AlphabetScreen() {
  const columns = ['ē','i','o','a','ā','ī','ō','final'];
  const ipa: Record<string,string> = {
    ē:'[eː]', i:'[i]', o:'[o]', a:'[a]', ā:'[aː]', ī:'[iː]', ō:'[oː]', final:'',
  };


    // ᐯ ᐱ ᐳ ᐸ ᐹ ᐲ ᐴ ᑊ
    // ᑌ ᑎ ᑐ ᑕ ᑖ ᑏ ᑑ ᐟ
    // ᑫ ᑭ ᑯ ᑲ ᑳ ᑮ ᑰ ᐠ
    // ᒣ ᒥ ᒧ ᒪ ᒫ ᒦ ᒨ ᒼ
    // ᓀ ᓂ ᓄ ᓇ ᓈ ᓃ ᓅ ᐣ
    // ᓭ ᓯ ᓱ ᓴ ᓵ ᓲ ᓲ̇ ᐢ
    // ᔦ ᔨ ᔪ ᔭ ᔮ ᔩ ᔫ ᔾ
    // ᒉ ᒋ ᒍ ᒐ ᒑ ᒌ ᒎ ᐨ  
  const rows = [
    { base: '     ',  symbols: ['ᐁ','ᐃ','ᐅ','ᐊ','ᐋ','ᐄ','ᐆ',' '] }, 
    { base: 'w [w]',  symbols: ['ᐍ','ᐏ','ᐓ','ᐘ','ᐚ','ᐑ','ᐕ','ᐤ'] },
    { base: 'p [p]',  symbols: ['ᐯ','ᐱ','ᐳ','ᐸ','ᐹ','ᐲ','ᐴ','ᑊ'] },
    { base: 't [t]',  symbols: ['ᑌ','ᑎ','ᑐ','ᑕ','ᑖ','ᑏ','ᑑ','ᐟ'] },
    { base: 'k [k]',  symbols: ['ᑫ','ᑭ','ᑯ','ᑲ','ᑳ','ᑮ','ᑰ','ᐠ'] },
    { base: 'm [m]',  symbols: ['ᒣ','ᒥ','ᒧ','ᒪ','ᒫ','ᒦ','ᒨ','ᒼ'] },
    { base: 'n [n]',  symbols: ['ᓀ','ᓂ','ᓄ','ᓇ','ᓈ','ᓃ','ᓅ','ᐣ'] },
    { base: 's [s]',  symbols: ['ᓭ','ᓯ','ᓱ','ᓴ','ᓵ','ᓰ','ᓲ','ᐢ'] },
    { base: 'y [j]',  symbols: ['ᔦ','ᔨ','ᔪ','ᔭ','ᔮ','ᔩ','ᔫ','ᔾ'] },
    { base: 'c [t͡s]',symbols: ['ᒉ','ᒋ','ᒍ','ᒐ','ᒑ','ᒌ','ᒎ','ᐨ'] },
  ];

  const [selected, setSelected] = useState<string | null>(null);
  const [pron, setPron] = useState<string>('');

  const say: Record<string,string> = {
    // 필요하면 여기에 발음 매핑을 채워 넣으세요.
  };

  const onPick = (sym: string) => {
    setSelected(sym);
    setPron(say[sym] ?? '');
  };

  return (
    <View style={styles.page}>
      {/* 상단 선택 영역 */}
      <View style={styles.header}>
        {selected ? (
          <>
            <Text style={styles.selectedSymbol}>{selected}</Text>
            <Text style={styles.pronunciationText}>{pron}</Text>
          </>
        ) : (
          <Text style={styles.placeholder}>Tap a syllabic to see pronunciation</Text>
        )}
      </View>

      {/* 표 */}
      <ScrollView>
        {/* 헤더 행 */}
        <View style={[styles.row, styles.headerRow]}>
          <View style={[styles.baseCell, { height: 60 }]}>
            <Text style={styles.baseHeaderText}>Base</Text>
          </View>
          <View style={styles.cellsRow}>
            {columns.map((c, i) => (
              <View
                key={c}
                style={[styles.cell, i === columns.length - 1 && styles.lastCell]}
              >
                <Text style={styles.headerTop}>{c}</Text>
                {!!ipa[c] && <Text style={styles.headerBottom}>{ipa[c]}</Text>}
              </View>
            ))}
          </View>
        </View>

        {/* 데이터 행들 */}
        {rows.map((r) => (
          <View key={r.base} style={styles.row}>
            <View style={[styles.baseCell, { height: 60 }]}>
              <Text numberOfLines={1}>{r.base}</Text>
            </View>

            <View style={styles.cellsRow}>
              {r.symbols.map((sym, i) => (
                <TouchableOpacity
                  key={`${r.base}-${i}`}
                  onPress={() => onPick(sym)}
                  style={[
                    styles.cell,
                    i === columns.length - 1 && styles.lastCell,
                    selected === sym && styles.selectedCell,
                  ]}
                >
                  <Text
                    style={[
                      styles.symbol,
                      selected === sym && styles.selectedSymbolText,
                    ]}
                  >
                    {sym}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
