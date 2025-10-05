import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import TrackPlayer, { Capability } from 'react-native-track-player';
import styles from '../styles/AlphabetScreen.styles';

export async function setupPlayer() {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [Capability.Play, Capability.Pause],
    });
    console.log('✅ TrackPlayer setup complete');
  } catch (err) {
    console.error('TrackPlayer setup error:', err);
  }
}

export async function playSound(file: any) {
  try {
    await TrackPlayer.reset();
    await TrackPlayer.add({
      id: 'sound',
      url: file,
      title: 'Cree Sound',
    });
    await TrackPlayer.play();
  } catch (error) {
    console.log('🎵 Sound playback failed:', error);
  }
}


export default function AlphabetScreen() {
  const columns = ['ē','i','o','a','ā','ī','ō','final'];
  const ipa: Record<string,string> = {
    ē:'[eː]', i:'[i]', o:'[o]', a:'[a]', ā:'[aː]', ī:'[iː]', ō:'[oː]', final:'',
  };


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

  const soundMap: Record<string, any> = {
    'ᐊ': require('../assets/sound/a.mp3'),
    'ᐋ': require('../assets/sound/aa.mp3'),
    'ᐁ': require('../assets/sound/e.mp3'),
    'ᐃ': require('../assets/sound/i.mp3'),
    'ᐄ': require('../assets/sound/ii.mp3'),
    'ᐅ': require('../assets/sound/u.mp3'),
    'ᐆ': require('../assets/sound/uu.mp3'),
    'ᐘ': require('../assets/sound/wa.mp3'),
    'ᐚ': require('../assets/sound/waa.mp3'),
    'ᐍ': require('../assets/sound/we.mp3'),
    'ᐏ': require('../assets/sound/wi.mp3'),
    'ᐑ': require('../assets/sound/wii.mp3'),
    'ᐓ': require('../assets/sound/wu.mp3'),
    'ᐕ': require('../assets/sound/wuu.mp3'),
  };
  
  const pronunciationMap: Record<string, string> = {
    'ᐊ': '[a]',
    'ᐋ': '[aa]', 
    'ᐁ': '[e]',
    'ᐃ': '[i]',
    'ᐄ': '[ii]',
    'ᐅ': '[u]',
    'ᐆ': '[uu]',
    'ᐘ': '[wa]',
    'ᐚ': '[waa]',
    'ᐍ': '[we]',
    'ᐏ': '[wi]',
    'ᐑ': '[wii]',
    'ᐓ': '[wu]',
    'ᐕ': '[wuu]',
  };
  // ✅ Player setup + cleanup
  useEffect(() => {
    (async () => {
      await setupPlayer();
    })();

    return () => {
      (async () => {
        try {
          await TrackPlayer.destroy();
          console.log('🧹 TrackPlayer destroyed');
        } catch (err) {
          console.warn('TrackPlayer already destroyed or not initialized');
        }
      })();
    };
  }, []);

  const onPick = async (sym: string) => {
    setSelected(sym);
    setPron(pronunciationMap[sym] ?? '');

    const soundFile = soundMap[sym];
    if (soundFile) {
      await playSound(soundFile);
    }
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
        <Text style={styles.copyright}>© 2025 Cree. All rights reserved.</Text>

      </ScrollView>
    </View>
  );
}
