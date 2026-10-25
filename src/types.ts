/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CartItem {
  id: string;
  title: string;
  price: number;
  category: string;
  quantity: number;
  image?: string;
}

export interface QuickViewData {
  title: string;
  price: number;
  desc: string;
  image: string;
  craft?: string;
  region?: string;
}
