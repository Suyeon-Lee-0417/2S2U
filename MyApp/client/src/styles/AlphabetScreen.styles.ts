import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
  },

  header: {
    alignItems: 'center',
    marginBottom: 20,
  },

  placeholder: { fontSize: fonts.body, color: colors.muted },
  selectedSymbol: { fontSize: fonts.titleLarge, fontWeight: 'bold', color: colors.primary },
  pronunciationText: { fontSize: fonts.title, color: colors.text },

  // ===== 표 공통 =====
  row: {
    width: '100%',                 // 행이 항상 화면 너비를 꽉 채우도록
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.border,
  },

  // Base(왼쪽) 열: 고정폭
  baseCell: {
    width: 100,
    backgroundColor: colors.baseCell,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  // 나머지 8개 칸을 담는 컨테이너
  cellsRow: {
    flex: 1,
    flexDirection: 'row',
  },

  // 개별 셀(가변폭) — flex:1로 균등 분배
  cell: {
    flex: 1,
    minWidth: 0,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#fff',
  },
  lastCell: { borderRightWidth: 0 },

  // 헤더
  headerRow: { backgroundColor: colors.headerBackground },
  baseHeaderText: { fontWeight: 'bold', fontSize: fonts.body },
  headerTop: { fontWeight: 'bold', fontSize: fonts.body },
  headerBottom: {
    fontSize: 12,       // fonts.caption이 없으면 이렇게 고정값 사용
    color: colors.muted,
    marginTop: 2,
  },

  symbol: { fontSize: fonts.symbol, color: colors.text },
  selectedCell: { backgroundColor: colors.highlight },
  selectedSymbolText: { fontWeight: 'bold', color: colors.secondary },

  copyright: {
  fontSize: 12,
  color: '#6b7280', // 회색톤
  marginTop: 20,
  marginBottom: 30,
  textAlign: 'center',
},
});
