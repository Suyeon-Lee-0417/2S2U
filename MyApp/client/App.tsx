// MyApp/client/App.tsx
import React, { useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import BottomTabNav from './src/navigation/BottomTabNav';
import TrackPlayer, { Capability } from 'react-native-track-player';

export default function App() {
  const playerReadyRef = useRef(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        await TrackPlayer.setupPlayer();
        if (!mounted) return;
        playerReadyRef.current = true;

        await TrackPlayer.updateOptions({
          capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
        });

        console.log('🎧 TrackPlayer initialized');
      } catch (e) {
        console.error('TrackPlayer setup error:', e);
      }
    })();

    // ✅ 안전한 cleanup
    return () => {
      mounted = false;
      (async () => {
        try {
          if (!playerReadyRef.current) return;

          // 개발/핫리로드/시뮬레이터에서도 안전
          await TrackPlayer.reset();

          // 정말 완전 종료가 필요할 때만 (권장: 안드로이드 실기기 + 프로덕션)
          if (Platform.OS === 'android' && !__DEV__) {
            try {
              await TrackPlayer.destroy();
              console.log('🧹 TrackPlayer destroyed');
            } catch (e) {
              // destroy 실패는 무시 (이미 reset 했으므로 안전)
              console.warn('destroy() skipped/failed (ignored):', e);
            }
          }
        } catch (err) {
          console.warn('cleanup error (ignored):', err);
        } finally {
          playerReadyRef.current = false;
        }
      })();
    };
  }, []);

  return <BottomTabNav />;
}
