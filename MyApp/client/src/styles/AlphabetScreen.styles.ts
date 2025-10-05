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
  placeholder: {
    fontSize: fonts.body,
    color: colors.muted,
  },
  selectedSymbol: {
    fontSize: fonts.titleLarge,
    fontWeight: 'bold',
    color: colors.primary,
  },
  pronunciationText: {
    fontSize: fonts.title,
    color: colors.text,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  cell: {
    borderRightWidth: 1,
    borderColor: colors.border,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseCell: {
    backgroundColor: colors.baseCell,
    width: 100,
  },
  headerRow: {
    backgroundColor: colors.headerBackground,
  },
  headerText: {
    fontWeight: 'bold',
  },
  symbol: {
    fontSize: fonts.symbol,
    color: colors.text,
  },
  selectedCell: {
    backgroundColor: colors.highlight,
  },
  selectedSymbolText: {
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
