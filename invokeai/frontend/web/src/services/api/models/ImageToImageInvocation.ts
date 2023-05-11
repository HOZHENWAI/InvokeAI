/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageField } from './ImageField';

/**
 * Generates an image using img2img.
 */
export type ImageToImageInvocation = {
  /**
   * The id of this node. Must be unique among all nodes.
   */
  id: string;
  type?: 'img2img';
  /**
   * The prompt to generate an image from
   */
  prompt?: string;
  /**
   * The seed to use (omit for random)
   */
  seed?: number;
  /**
   * The number of steps to use to generate the image
   */
  steps?: number;
  /**
   * The width of the resulting image
   */
  width?: number;
  /**
   * The height of the resulting image
   */
  height?: number;
  /**
   * The Classifier-Free Guidance, higher values may result in a result closer to the prompt
   */
  cfg_scale?: number;
  /**
   * The scheduler to use
   */
  scheduler?: 'ddim' | 'dpmpp_2' | 'k_dpm_2' | 'k_dpm_2_a' | 'k_dpmpp_2' | 'k_euler' | 'k_euler_a' | 'k_heun' | 'k_lms' | 'plms';
  /**
   * The model to use (currently ignored)
   */
  model?: string;
  /**
   * The input image
   */
  image?: ImageField;
  /**
   * The strength of the original image
   */
  strength?: number;
  /**
   * Whether or not the result should be fit to the aspect ratio of the input image
   */
  fit?: boolean;
};

