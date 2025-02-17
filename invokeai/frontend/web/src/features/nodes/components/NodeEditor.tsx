import 'reactflow/dist/style.css';

import { Flex } from '@chakra-ui/react';
import { useAppSelector } from 'app/store/storeHooks';
import { IAINoContentFallback } from 'common/components/IAIImageFallback';
import TopPanel from 'features/nodes/components/flow/panels/TopPanel/TopPanel';
import type { AnimationProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { MdDeviceHub } from 'react-icons/md';

import AddNodePopover from './flow/AddNodePopover/AddNodePopover';
import { Flow } from './flow/Flow';
import BottomLeftPanel from './flow/panels/BottomLeftPanel/BottomLeftPanel';
import MinimapPanel from './flow/panels/MinimapPanel/MinimapPanel';

const isReadyMotionStyles: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
};
const notIsReadyMotionStyles: CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
};
const initial: AnimationProps['initial'] = {
  opacity: 0,
};
const animate: AnimationProps['animate'] = {
  opacity: 1,
  transition: { duration: 0.2 },
};
const exit: AnimationProps['exit'] = {
  opacity: 0,
  transition: { duration: 0.2 },
};

const NodeEditor = () => {
  const isReady = useAppSelector((s) => s.nodes.isReady);
  const { t } = useTranslation();
  return (
    <Flex
      layerStyle="first"
      position="relative"
      width="full"
      height="full"
      borderRadius="base"
      alignItems="center"
      justifyContent="center"
    >
      <AnimatePresence>
        {isReady && (
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            style={isReadyMotionStyles}
          >
            <Flow />
            <AddNodePopover />
            <TopPanel />
            <BottomLeftPanel />
            <MinimapPanel />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isReady && (
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            style={notIsReadyMotionStyles}
          >
            <Flex
              layerStyle="first"
              position="relative"
              width="full"
              height="full"
              borderRadius="base"
              alignItems="center"
              justifyContent="center"
              pointerEvents="none"
            >
              <IAINoContentFallback
                label={t('nodes.loadingNodes')}
                icon={MdDeviceHub}
              />
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default memo(NodeEditor);
