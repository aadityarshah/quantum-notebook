# Quantum Gates

## Single Qubit Gates

Consider a qubit interacting with an external field described by the Hamiltonian $\hat{H}$. Since $\hat{H}$ is Hermitian, it can be written in the form

$$
\hat{H} = h_0 + \beta \vec{n}\cdot \hat{\vec{\sigma}}
$$

Thus, we know that we can describe the change of state using the time evolution operator $\hat{U}$ as

$$
\hat{U} = e^{i\alpha}\hat{R}_{\vec{n}}(\eta)
$$

where $\alpha = -h_0t/\hbar$ and $\eta = 2 \beta t / \hbar$.

We will be interested in implementing transformations to qubit states using such unitary operators.

A single qubit quantum gate is such a unitary transformation acting on a quantum state

$$
\ket{\psi'} = \hat{U} \ket{\psi}
$$

> [!NOTE]
> We define $a \oplus b = a + b - 2ab$ for $a, b \in \{0, 1\}$ essentially representing the XOR operation on $a$ and $b$.

### X-gate

The X-gate is defined by

$$
\begin{aligned}
\hat{X}\ket{0} &= \ket{1}, \\
\hat{X}\ket{1} &= \ket{0}
\end{aligned}
$$

Thus, $\hat{X} \equiv \hat{\sigma}_x$ and $\hat{X}\ket{a} = \ket{a \oplus 1}.$

It is thus also known as _NOT gate_.

### Y-gate

The Y-gate is defined by

$$
\begin{aligned}
\hat{Y}\ket{0} &= i\ket{1}, \\
\hat{Y}\ket{1} &= -i\ket{0}
\end{aligned}
$$

Thus, $\hat{Y} \equiv \hat{\sigma}_y$ and $\hat{Y}\ket{a} = (-1)^{2a+1}\ket{a \oplus 1}$.

### Z-gate

The Z-gate is defined by

$$
\begin{aligned}
\hat{Z}\ket{0} &= \ket{0}, \\
\hat{Z}\ket{1} &= -\ket{1}
\end{aligned}
$$

Thus, $\hat{Z} \equiv \hat{\sigma}_z$ and $\hat{Z}\ket{a} = (-1)^a \ket{a}.$

> [!NOTE]
> The X, Y and Z gates are said to be Pauli gates as they perform the operations equivalent to the Pauli operators.

### T or $\pi/8$ gate

The T-gate is defined by

$$
\begin{aligned}
\hat{T}\ket{0} &= \ket{0}, \\
\hat{T}\ket{1} &= e^{i\pi/4}\ket{1}
\end{aligned}
$$

Thus, $\hat{T}\ket{a} = e^{ia\pi/4} \ket{a}.$

The operator form is given by

$$
\begin{aligned}
\hat{T} &= \ket{0}\bra{0} + e^{i\pi/4}\ket{1}\bra{1} \\
&= e^{i\pi/8}e^{-i\pi\hat{\sigma}_z/8}
\end{aligned}
$$

### Phase or S-gate

The S-gate is defined by

$$
\begin{aligned}
\hat{S}\ket{0} &= \ket{0}, \\
\hat{S}\ket{1} &= i \ket{1}
\end{aligned}
$$

Thus, $\hat{S}\ket{a} =  e^{ia\pi/2} \ket{a} = \hat{T}^2$

The operator form is given by

$$
\begin{aligned}
\hat{S} &= \ket{0}\bra{0} + i \ket{1}\bra{1} \\
&= e^{i\pi/4}e^{-i\pi\hat{\sigma}_z/4}
\end{aligned}
$$

### Hadamard or H gate

The Hadamard gate is defined by

$$
\begin{aligned}
\hat{H}\ket{0} &= \frac{1}{\sqrt{2}} \left(\ket{0} + \ket{1}\right) \\
\hat{H}\ket{1} &= \frac{1}{\sqrt{2}} \left(\ket{0} - \ket{1}\right)
\end{aligned}
$$

Thus,

$$
\hat{H}\ket{a} = \frac{1}{\sqrt{2}} \sum_{b=0, 1} (-1)^{ab} \ket{{b}}
$$

The operator form is given by

$$
\begin{aligned}
\hat{H} &= \frac{1}{\sqrt{2}} \left(\hat{\sigma}_x + \hat{\sigma}_z \right) \\
&= ie^{-i\pi (\hat{\sigma}_x + \hat{\sigma}_z)/2 \sqrt{2}}
\end{aligned}
$$

Thus, we also get

$$
\hat{H}^2 = I
$$

## Arbitrary Single-Qubit Gate

We can express any arbitrary single qubit gate using a small set of gates which are referred to as universal gates.

Up to a global phase, an arbitrary unitary can be represented as $\hat{R}_{\vec{n}}(\eta)$ . Now, we know

$$
\hat{R}_{\vec{n}}(\eta) = e^{-i \eta (\vec{n}\cdot \hat{\vec{\sigma}})/2}
$$

Consider $\eta = 2\pi/p$. Thus,

$$
{\hat{R}_{\vec{n}}\left(\frac{2\pi}{p}\right)}^N = \hat{R}_{\vec{n}}\left(\frac{2N\pi}{p}\right)
$$

where $N$ is an integer.

If $p$ is a positive integer, then for $N = 1, 2, \dots p-1, p$, we obtain a set of possible values. At $N= p$, we have $2\pi$. For $N \gt p$, same angles are generated again. Hence, for integral values of $p$, only ceertain values can be generated.

But now if $p$ is an irrational multiple of $\pi$, then $2N\pi/p \neq 2\pi$ for any $q$ and hence every application of $\hat{R}_{\vec{n}}\left(2\pi/p\right)$ generates new angle without repetition.

It can be shown that one can always find an $N$ such that $2N\pi \approx \theta$ within any desired accuracy. Consequently, $N$ $\hat{R}_{\vec{n}}\left(2\pi/p\right)$ gates can realize $\hat{R}_{\vec{n}}(\eta)$ within any desired degree of accuracy.(Refer [Multi-rotations on the unit circle by Han Yu](https://doi.org/10.1016/j.jnt.2018.12.008.))

### Arbitrary rotation about a fixed axis

We find

$$
\hat{T} \hat{H} = \frac{e^{i\pi/8}}{\sqrt{2}} \left(-i sin(\pi/8) + sin(\pi/8)\hat{\vec{\sigma_y}} + cos(\pi/8)(\hat{\vec{\sigma_x}} + \hat{\vec{\sigma_z}})\right)
$$

On multiplying above with $\hat{H}$ and simplifying, we get

$$
\hat{H} \hat{T} \hat{H} = e^{i\pi/8} e^{-i\pi\hat{\vec{\sigma_z}}/8}
$$

On multiplying by $\hat{T}$ and choosing $\eta$ such that $\cos(\eta/2) = \cos^2(\pi/8)$, we get

$$
\hat{T}\hat{H}\hat{T}\hat{H} = e^{i\pi/4}\{\cos(\eta/2)I - i \sin(\eta/2)\vec{p}\cdot \hat{\vec{\sigma}}\}
\equiv \hat{R}_{\vec{p}}(\eta)$$

where

$$

\vec{p} = \frac{1}{\sqrt{1 + \cos^2 (\pi/8)}}\left[\cos(\pi/8) \vec{e_x} + \sin(\pi/8) \vec{e_y} + \cos(\pi/8) \vec{e_z}\right]

$$

Similarly, we obtain

$$

\hat{H}\hat{T}\hat{H}\hat{T} \equiv \hat{R}_{\vec{q}}(\eta)

$$

where

$$

\vec{q} = \frac{1}{\sqrt{1 + \cos^2(\pi/8)}} \left[\cos(\pi/8) \vec{e_x} - \sin(\pi/8) \vec{e_y} + cos(\pi/8) \vec{e_z} \right]

$$


Now, since $\hat{H}^2 = I$, we can write

$$

\hat{H}\hat{T}\hat{H}\hat{T} = \hat{H}\hat{T}\hat{H}\hat{T}\hat{H}^2 = \hat{H}(\hat{T}\hat{H}\hat{T}\hat{H}) \hat{H}

$$

Thus, we have

$$

\hat{R}_{\vec{q}}(\eta) = \hat{H}\hat{R}_{\vec{p}}(\eta) \hat{H}

$$

These show that one can implement rotation by an arbitrary angle $\theta$ about a fixed axis.

### Arbitrary rotation about an arbitrary axis

> [!INFO] Proof
> The unitary operator $\hat{R}_{\vec{n}}(\theta)$
> where $\vec{n}, \theta$ are arbitrary, can be expressed as
>
> $$
> \hat{R}_{\vec{n}}(\theta) = \hat{R}_{\vec{a}}(\alpha) \hat{R}_{\vec{b}}(\beta) \hat{R}_{\vec{a}}(\gamma)
> $$

Here, we choose $\vec{a} = \vec{p}$ and $\vec{b} = \vec{q}$ and thus, we have

$$

\hat{R}_{\vec{n}}(\theta) = \hat{R}_{\vec{p}}(\alpha) \hat{R}_{\vec{q}}(\beta) \hat{R}_{\vec{p}}(\gamma)

$$

Assume that desired accuracy for rotation operators above is achieved by $\alpha \approx (n_1 \eta) \mod 2\pi, \beta \approx (n_2 \eta) \mod 2\pi$ and $\gamma \approx (n_3 \eta) \mod 2\pi$, we have

$$

\hat{R}_{\vec{p}}(\alpha) \approx \hat{R}_{\vec{p}}^{n_1} (\eta), \quad \hat{R}_{\vec{q}}(\beta) \approx \hat{R}_{\vec{q}}^{n_2} (\eta), \quad \hat{R}_{\vec{p}}(\gamma) \approx \hat{R}_{\vec{p}}^{n_3} (\eta)

$$

and since we know $\hat{H}^2 = I$, we get

$$

\hat{R}_{\vec{q}}(\beta) = \hat{H} \hat{R}_{\vec{p}}^{n_2} (\eta) \hat{H}

$$

Thus, we get

$$

\hat{R}_{\vec{n}}(\theta) = \hat{R}_{\vec{p}}^{n_1}(\eta) \hat{H} \hat{R}_{\vec{p}}^{n_2}(\eta) \hat{H}\hat{R}_{\vec{p}}^{n_3}(\eta)

$$

Thus, in this way, one can represent any arbitrary single qubit gate which performs rotation by an arbitrary angle $\theta$ along an arbitrary axis $\eta$.

Also, this is why $T$ and $H$ are referred to as universal gates.
$$
