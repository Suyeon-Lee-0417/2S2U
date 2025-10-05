// @ts-ignore
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/AlphabetScreen.styles';

export default function AlphabetScreen() {
  const columns = ['ē', 'i', 'o', 'a', 'ā', 'ī', 'ō', 'final'];

  const rows = [
    { base: 'w [w]', symbols: ['ᐍ', 'ᐃ', 'ᐅ', 'ᐊ', 'ᐋ', 'ᐄ', 'ᐆ', 'ᐤ'] },
    { base: 'p [p]', symbols: ['ᐯ', 'ᐱ', 'ᐳ', 'ᐸ', 'ᐹ', 'ᐲ', 'ᐴ', 'ᑊ'] },
    { base: 't [t]', symbols: ['ᑌ', 'ᑎ', 'ᑐ', 'ᑕ', 'ᑖ', 'ᑏ', 'ᑑ', 'ᐟ'] },
  ];

  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const [pronunciation, setPronunciation] = useState<string>('');

  const pronunciationMap: Record<string, string> = {
    'ᐍ': 'weh',
    'ᐃ': 'ee',
    'ᐅ': 'oh',
    'ᐊ': 'ah',
  };

  const handlePress = (symbol: string) => {
    setSelectedSymbol(symbol);
    setPronunciation(pronunciationMap[symbol] || '');
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        {selectedSymbol ? (
          <>
            <Text style={styles.selectedSymbol}>{selectedSymbol}</Text>
            <Text style={styles.pronunciationText}>{pronunciation}</Text>
          </>
        ) : (
          <Text style={styles.placeholder}>Tap a syllabic to see pronunciation</Text>
        )}
      </View>

      <ScrollView horizontal>
        <View>
          {/* Header Row */}
          <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.cell, styles.headerText]}>Base</Text>
            {columns.map((col) => (
              <Text key={col} style={[styles.cell, styles.headerText]}>
                {col}
              </Text>
            ))}
          </View>

          {/* Symbol Rows */}
          {rows.map((row, i) => (
            <View key={i} style={styles.row}>
              <Text style={[styles.cell, styles.baseCell]}>{row.base}</Text>
              {row.symbols.map((sym, j) => (
                <TouchableOpacity
                  key={j}
                  style={[
                    styles.cell,
                    selectedSymbol === sym && styles.selectedCell,
                  ]}
                  onPress={() => handlePress(sym)}
                >
                  <Text
                    style={[
                      styles.symbol,
                      selectedSymbol === sym && styles.selectedSymbolText,
                    ]}
                  >
                    {sym}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}